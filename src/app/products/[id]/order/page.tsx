import OrderForm from './OrderForm';

export default async function OrderPage({
  params,
}: {
  params: { id: string };
}) {
  return <OrderForm productId={params.id} />;
} 