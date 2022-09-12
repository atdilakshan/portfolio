import SocialMedia from './SocialMedia'

export interface Props {
  className?: string
}

const Footer = ({ className }: Props) => {
  return (
    <footer className={className}>
      <div className="container mx-auto px-8 lg:px-16 py-8 gap-8 flex max-w-4xl flex-wrap justify-center">
        <div className="pt-8">
          <SocialMedia />
        </div>
      </div>
    </footer>
  )
}

export default Footer