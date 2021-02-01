function countries(list, node) {
  list.forEach(function (country) {
    let option = document.createElement('option');
    option.textContent = country;
    option.value = country;
    node.appendChild(option);
  });
}

(function populateOptions() {
  let field = elem('.form_country');
  field ? countries(formCountries, field) : false;
})();

function formFeedBack(parent, success = false) {
  let bold, modal, icon, clipBoard, title, message, messages;
  messages = {
    success: {
      title: "Message sent!",
      message: `{{ T "success_message" }}`,
      icon: "icon-success.png"
    },
    failure: {
      title: "Something is off!",
      message: `{{ T "error_message" }}`,
      icon: "icon-failure.png"
    }
  }

  let feedback = success ? messages.success : messages.failure;
  let modalClass = 'modal_form';

  modal = createEl();
  modal.className = modalClass;
  clipBoard = createEl();
  title = createEl('h3');
  title.textContent = feedback.title;
  bold = createEl('strong');
  bold.innerHTML = feedback.message;
  message = createEl('p')
  message.appendChild(bold);
  icon = createEl('img');
  icon.src = `/icons/${feedback.icon}`;
  icon.className = 'modal_icon';

  clipBoard.appendChild(icon);
  clipBoard.appendChild(title);
  clipBoard.appendChild(message);
  modal.appendChild(clipBoard);

  // append modal only once
  // parent node
  let node = parent.parentNode;
  let children = node.children;
  let hasModal = containsClass(children[children.length - 1], modalClass);

  if (!hasModal) {
    node.appendChild(modal);
    window.scrollTo(0, 201);
  }

  // remove modal after 3 seconds
  setTimeout(function () {
    modal.remove();
  }, 3000)
}

function formValues(form) {
  const isValidElement = element => {
    return element.name && element.value;
  };

  const isValidValue = element => {
    return (!['checkbox', 'radio'].includes(element.type) || element.checked);
  };

  const isCheckbox = element => element.type === 'checkbox';
  const isMultiSelect = element => element.options && element.multiple;

  const getSelectValues = options => [].reduce.call(options, (values, option) => {
    return option.selected ? values.concat(option.value) : values;
  }, []);

  const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    if (isValidElement(element) && isValidValue(element)) {
      if (isCheckbox(element)) {
        data[element.name] = (data[element.name] || []).concat(element.value);
      } else if (isMultiSelect(element)) {
        data[element.name] = getSelectValues(element);
      } else {
        data[element.name] = element.value;
      }
    }
    const currentPage = window.location.href;
    let referrer = document.referrer;
    referrer ? data.previousPage = referrer : "self";
    data.currentPage = currentPage;
    return data;
  }, {});

  const data = formToJSON(form.elements);
  return JSON.stringify(data, null, "  ");

}

function submitForm(form) {
  let formAction = form.dataset.action;
  console.log(formAction);

  let data = formValues(form);
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: data
  }

  fetch(formAction, options)
    .then(response => response.text())
    .then(() => {
      formFeedBack(form, true);
    })
    .catch(() => {
      formFeedBack(form)
    });
}

(function handleForm() {
  // request options
  let formID = '#contactform';
  let form = elem(formID);
  let submitButton = elem('#submit');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      submitButton.disabled = true;
      submitForm(form);
      form.reset();
      return false;
    });
  }
})();
