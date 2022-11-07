import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string,
  product: {
    name: string,
    imageUrl: string,
  }
}

export default function Success({ customerName, product }: SuccessProps) {

  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>
        {/* <Image src={product.imageUrl} alt="" width={120} height={110}/> */}
      </ImageContainer>

      <p>
        {/* Uhuul! <strong>{customerName}</strong> , Sua camiseta <strong>{product.name}</strong> já está a caminho da sua casa. */}
      </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
        
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query, locale }) => {
  const sessionId = query.session_id;

  console.log(query)
  console.log(sessionId)
  
  // const session = await stripe.checkout.sessions.retrieve(sessionId, {
  //   expand: ['line_items', 'line_items.data.price.product'],
  // });

  // const customerName = session.customer_details.name;
  // const product = session.line_items.data[0].price.product as Stripe.Product;

  
  return {
    props: {
      // customerName,
      // product: {
      //   name: product.name,
      //   imageUrl: product.images[0],
      // }

    }
  }
} 
