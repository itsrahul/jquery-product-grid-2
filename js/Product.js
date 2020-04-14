export default class Product
{
  constructor(item)
  {
    this.name     = item.name;
    this.url      = item.url;
    this.color    = item.color;
    this.brand    = item.brand;
    this.sold_out = item.sold_out;
  }
}