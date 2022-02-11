import useTranslation from 'next-translate/useTranslation'
import Container from "@mui/material/Container";
import Login from '../components/login/login';

function HomePage() {
  const { t, lang } = useTranslation()
  return (
    <Container maxWidth="sm" className="text-black-500">
    <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
      <p className="text-xl md:text-2xl text-gray-500">{t('home:title')} </p>
      <br/>
      <p className="text-xl md:text-2xl text-gray-500">
      {t('home:description')} 
      </p>
      <br/><br/><br/>
      <Login />
      <br/><br/><br/>
    </div>
    </Container>
  )
}

export default HomePage