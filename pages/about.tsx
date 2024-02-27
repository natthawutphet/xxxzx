// pages/about.tsx
import { GetServerSideProps, NextPage } from 'next';

interface AboutProps {
  // Define your props here
  message: string;
}

const About: NextPage<AboutProps> = (props) => {
  return (
    <div>
      <h1>About Page</h1>
      <p>{props.message}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from an external API or perform other server-side operations here
  const message = "This is server side rendered message!";

  return {
    props: { message }, // will be passed to the page component as props
  };
};

export default About;
