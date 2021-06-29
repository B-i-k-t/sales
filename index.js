
function add() {
  let item = document.createElement('div');
  item.className = "item__add";
  let name = document.createElement('input');
  name.className = "item__name";
  item.append(name);
  let count = document.createElement('input');
  count.className = "item__count";
  item.append(count);
  let comment = document.createElement('input');
  comment.className = "item__comment";
  item.append(comment);
  let save = document.createElement('button');
  save.className = "btn__save";
  save.innerHTML = "Сохранить";
  save.setAttribute('onclick',"button_save()");
  item.append(save);
  document.body.append(item);
}
function button_save() {
    let save__item = document.createElement('div');
    save__item.className = "item__save"
    let save__name = document.getElementsByClassName('item__name');
    let save__count = document.getElementsByClassName('item__count');
    let save__comment = document.getElementsByClassName('item__comment');
    save__item.innerHTML = "<b>" + save__name[0].value + "</b> " + save__count[0].value + " шт. (" + save__comment[0].value + ")"; 
    document.body.append(save__item);
    let item = document.getElementsByClassName('item__add');
    while(item.length) {
      item[0].remove();
    } 
  }
function clear1() {
  let item = document.getElementsByClassName('item__add');
  while(item.length) {
    item[0].remove();
  }
  let item__save = document.getElementsByClassName('item__save');
  while(item__save.length) {
    item__save[0].remove();
  }
}
