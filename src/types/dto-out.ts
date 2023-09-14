export interface UserValues {
  name: string;
  email: string;
  password: string;
}

export interface CommentValues {
  productId: string;
  userEmail: string;
  userName: string;
  body: string;
}

export interface OrderValues {
  firstName: string;
  lastName: string;
  deliveryAddress: string;
  phone: string;
  email: string;
  buyer: string | null;
  totalPrice: number;
  orderItem: OrderItem[];
}
interface OrderItem {
  productName: string;
  productImage: string;
  productId: string;
  size: string;
  amount: number;
  quantityId: string;
}
