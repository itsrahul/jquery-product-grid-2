export default class Display
{
  static show(itemToDisplay, $displayContainer, styleClassName)
  {
    $displayContainer.children("p").detach();
    itemToDisplay.forEach( (item) => {
    let $element = 
    $("<p>").addClass(styleClassName)
    .append($("<img>", { src: "data/images/"+item.url, width: "150px", height: "150px"}) );
    
    $displayContainer.append($element);
    })
  }

}