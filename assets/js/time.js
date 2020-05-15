function timeSince(num){
  const currentTime = Math.floor(Date.now()/1000);
  const timestamp = parseInt(num);
  const timeSince = currentTime - timestamp; 
  
  var timeAgo;
  var timeTag; 
  var minute = 60;
  var hour = 3600;
  var day = 86400;
  var week = 604800;
  var month = 2.628e+6;
  var year = 3.154e+7;
  
  if (timeSince < minute ) {
    timeAgo = 1;
    timeTag = 'min';
  } else if (timeSince > minute && timeSince < hour ) {
    timeAgo = Math.ceil(timeSince / minute);
    timeTag = 'min';  
  } else if (timeSince > hour && timeSince < day ) {
    timeAgo = Math.floor(timeSince / hour);
    timeTag = 'h';
  } else if (timeSince > day && timeSince < week) {
    timeAgo = Math.floor(timeSince / day);
    timeTag = 'd';  
  } else if (timeSince > week && timeSince < month) {
    timeAgo = Math.floor(timeSince / week);
    timeTag = 'wk';  
  } else if (timeSince > month && timeSince < year) {
    timeAgo = Math.floor(timeSince / month);
    timeTag = 'm';  
  } else if (timeSince > year) {
    timeAgo = Math.floor(timeSince / year);
    timeTag = 'yr';  
  }

  return `${timeAgo}${timeTag}`;
 
}