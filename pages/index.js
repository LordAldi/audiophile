import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button/Button";
import Typography from "../components/Typography/Typography";

export default function Home() {
  return (
    <>
      <Typography variant="body">Morbi interdum mollis sapien</Typography>
      <Button variant="">SEE PRODUCT</Button>
    </>
  );
}
