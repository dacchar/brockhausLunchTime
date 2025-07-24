export type IOrder = {
  id: number;
  ordererName: string;
  buyerName: string;
  dish: string;
  price: Number;
  paid: Boolean;
  paypal: string;
  time: Date;
};

export class Order {
  constructor(
    public id: number,
    public ordererName: string,
    public buyerName: string,
    public dish: string,
    public price: Number,
    public paid: Boolean,
    public paypal: string,
    public time: Date
  ){
  }
};

export type IDebt = {
  ordererName: string;
  amount: number;
};

export class Debt {
  constructor(
    public ordererName: string,
    public amount: number
  ){
  }
};

export class Filter {
  constructor(
    public buyerName: string,
  ){
  }
};

