var shoplist={};
shoplist.name="購物清單"
shoplist.time="2022/6/7 "
shoplist.list=[
  
];

let item_html="<li id={{id}} class='buyitem'>{{num}}.{{item}}<div class='price'>{{price}}</div><div id={{del_id}} data-delid={{del_item_id}} class='del_btn'>X</div></li>";

let total_html="<div id='items_list'><li class='buyitem total'>總價<div class='price'>{{price}}</div>";

function showlist(){
  $("#items_list").html("");
  let total_price=0;
  
  for(let i=0;i<shoplist.list.length;i++){
    let item=shoplist.list[i];
    let item_id="buyitem_"+1;
    let del_item_id="del_buyitem_"+i;
    
    total_price+= parseInt(item.price);
    
    let current_item_html=
        item_html.replace("{{num}}",i+1)
                 .replace("{{item}}",item.name)
                 .replace("{{id}}",item_id)
                 .replace("{{del_id}}",del_item_id)
                 .replace("{{price}}",item.price)
    $("#items_list").append(current_item_html);
    
    $("#"+del_item_id).click(function(){
      remove_item(parseInt($(this).attr("data-delid")));
    });
  }
  let current_total_html=
      total_html.replace("{{price}}",total_price);
  $("#items_list").append(current_total_html);
}
showlist();

$(".addbtn").click(function(){
  
  shoplist.list.push(
  {name:$("#input_name").val(),
   price: $("#input_price").val()}
    
);
  $("#input_name").val("");
  $("#input_price").val("");
  showlist();
});

function remove_item(id){
  shoplist.list.splice(id,1);
  showlist();
}