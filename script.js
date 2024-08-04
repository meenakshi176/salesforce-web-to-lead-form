function beforesumbit() {
  let outputdate = document.querySelector(".outputdate");
  let inputdate = document.querySelector(".inputdate");
  console.log("inputdate.value", inputdate.value);
  //here you have to change the date into string using locale to find a locale go to org
  //developer console and find on anonymous window System.debug(UserInfo.getlocale()); output = en_IN
  //you have to replace en_IN =en-IN for locale;

  let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
  outputdate.value = formattedDate;
  console.log(formattedDate);
}
