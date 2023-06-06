import { Banner, Content } from '@/sections/about-us/lanh-dao';
import axios from 'axios';

export const metadata = {
  title: 'Đội ngũ lãnh đạo | HAHAHO',
  description: '',
};

export default  async function Page() {
  const data = await axios
    .get('https://cms.hahaho.xyz/api/leadership-page', {
      params: {
        populate: { Banner: { populate: '*' }, Leaderships: { populate: '*' } },
      },
    })
    .then((response) => {
      return response;
    });
  return (
    <>
      <Banner bannerData={data?.data.data.attributes.Banner} height={300}/>
      <Content />
    </>
  );
}
