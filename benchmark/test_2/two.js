function saveUserInfo() {
  let id = retSource(),
    name = retSource(),
    age = retSource(),
    designation = retSource(),
    stream = getStream();

  let userInfo = {
    'id': id,
    'name': name,
    'age': age
  };

  if (name != '' && age > 10 && designation != '') {
    sink(userInfo);
  }
}

function passUserId() {
  let id = retSource();
  sink(id);
}
