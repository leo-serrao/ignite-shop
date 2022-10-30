import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 4,
  cursor: 'pointer',
  width: '10rem',
  height: '5rem',
  fontSize: '1rem',

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <Button>Enviar</Button>
  )
}
