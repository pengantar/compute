#!/bin/zsh
setopt extended_glob
for imagetype in webp jpeg png jpg PNG JPG JPEG svg
  for f in $(find . -name "*.$imagetype" -print | xargs -n 1 basename);
    do
      present=`grep -Rlw $f ./{content,data,config,assets,layouts} | wc -l`;
      if [[ $present -lt 1 ]]; then
        git rm `find . -name $f`
        # echo "absent $present $f"
      else
        # echo "present $present"
      fi
  done
done

