import Image from 'next/image';
import Frame from './frame.svg';
import { paramCase } from 'param-case';
const LANH_DAO: ItemProps[] = [
  {
    pronouns: 'Ông',
    name: 'Trần Ngọc Dũ',
    image: '/images/lanh-dao/tran-ngoc-du.png',
    position: 'Tổng giám đốc',
    role: 'Chủ tịch Hội đồng Quản trị',
    content: [
      'Dựa trên phần mềm nền tảng iBPM (Insight Business Process Management) do chính đội ngũ kỹ sư của công ty làm ra, ông và các cộng sự đã triển khai thành công các dự án chuyển đổi số cho nhiều công ty, tập đoàn lớn trong nhiều lĩnh vực ngành nghề khác nhau. Ông tin tưởng rằng trong thời gian tới, Công ty HAHAHO sẽ mang lại nhiều giá trị hơn nữa cho cộng đồng, giúp các tổ chức và doanh nghiệp nâng cao năng lực sản xuất, kinh doanh và quản trị thông qua việc thực hiện các chương trình, dự án chuyển đổi số cho thị trường Việt Nam và quốc tế.',
      'Ông tốt nghiệp Kỹ sư ngành Khoa học Máy tính, Đại học Bách Khoa Thành phố Hồ Chí Minh. Với hơn 20 năm kinh nghiệm hoạt động trong lĩnh vực công nghệ thông tin, ông tiên phong và kiên định trong việc tổ chức, đầu tư, xây dựng và phát triển một phần mềm nền tảng quản trị thông tin và tự động hóa quy trình nghiệp vụ quản lý từ đầu những năm 2000. Vào năm 2005, ông cùng các cộng sự lập ra Công ty Infosoft, tiền thân của Công ty HAHAHO ngày nay.',
    ],
  },
  {
    pronouns: 'Ông',
    name: 'Phan Thanh Hà',
    image: '/images/lanh-dao/phan-thanh-ha.png',
    position: 'Phó Tổng giám đốc',
    role: 'Phát triển Kinh doanh & Đầu tư',
    content: [
      'Với hơn 15 năm kinh nghiệm trong quản lý, lãnh đạo, phát triển kinh doanh trong lĩnh vực công nghệ thông tin, truyền thông và với hơn 10 năm kinh nghiệm trong lĩnh vực phát triển dự án, thẩm định đầu tư tài chính tại các công ty và tập đoàn lớn tại Việt Nam, ông thấu hiểu và cộng hưởng sâu sắc với những khát vọng đổi mới, cải tiến của các tổ chức và doanh nghiệp trong cuộc cách mạng công nghiệp lần thứ IV.',
      'Với vai trò tham mưu cho lãnh đạo trong hoạt động phát triển kinh doanh và đầu tư tại HAHAHO, ông và các cộng sự không ngừng lấy những khó khăn trong việc quản trị, điều hành sản xuất, kinh doanh theo cách truyền thống, cách chưa ứng dụng hiệu quả công nghệ thông tin, truyền thông của các tổ chức, doanh nghiệp làm động lực để đưa ra các giải pháp chuyển đổi số hiệu quả, thiết thực hơn như chủ trương công ty đã đúc kết là “Một vốn – Bốn lời”.',
    ],
  },
  {
    pronouns: 'Ông',
    name: 'Phạm Hồng Quang',
    image: '/images/lanh-dao/pham-hong-quang.png',
    position: 'Phó Tổng giám đốc',
    role: 'Kỹ thuật và Công nghệ',
    content: [
      'Gắn bó với Infosoft (nay là HAHAHO) ngay từ những ngày đầu thành lập, ông đã góp công rất lớn trong việc xây dựng thành công nền tảng chuyển đổi số và tự động hóa quy trình iBPM “Make in Việt Nam”. Đây là nền tảng then chốt cho các giải pháp chuyển đổi số đã triển khai thành công tại các doanh nghiệp và tổ chức trong những năm qua và trong thời gian tới.',
      'Bằng những kinh nghiệm thực chiến trong gần 20 năm qua, ông có kiến thức sâu rộng về việc phân tích các nghiệp vụ ở các công ty, tập đoàn lớn; triển khai tự động hóa nhiều quy trình nghiệp vụ ở các ngành nghề khác nhau. Và với đam mê toán học cùng với thành tích cao nhất là đạt huy chương đồng trong cuộc thi Toán học cấp quốc gia, ông là người đưa ra những thuật toán thực thi hiệu quả, vận hành ổn định để nâng cấp, phát triển nền tảng iBPM đáp ứng xu thế phát triển phần mềm kiểu mới là “Low Code – No Code”.',
      'Ông tốt nghiệp Đại học Khoa học Tự nhiên, chuyên ngành Công nghệ tri thức.',
    ],
  },
  {
    pronouns: 'Ông',
    name: 'Đoàn Minh Hòa',
    image: '/images/lanh-dao/doan-minh-hoa.png',
    position: 'Phó Tổng giám đốc',
    role: 'Phát triển sản phẩm và dự án',
    content: [
      'Ông gia nhập HAHAHO với khát vọng chuyển hóa những “câu chuyện riêng” trong quản trị, điều hành của doanh nghiệp thành các sản phẩm phần mềm triển khai nhanh, vận hành hiệu quả, đóng góp vào việc nâng cao năng lực điều hành, quản trị sản xuất và kinh doanh của các tổ chức, doanh nghiệp.',
      'Nhờ sự hiểu biết sâu sắc về quy trình nghiệp vụ và các yêu cầu kỹ thuật của từng lĩnh vực, ông và các cộng sự đã triển khai thành công các dự án thành phần của chiến lược chuyển đổi số của các tập đoàn lớn, công ty lớn như: Đại Quang Minh; Đồng Tâm Group; Hoa Sen Group; Mai Linh Group; Công viên Phần mềm Quang Trung (QTSC); THACO Group...',
      'Ông đang theo học chương trình Thạc sĩ Trí tuệ nhân tạo của trường Đại học Khoa học Tự nhiên.',
    ],
  },
  {
    pronouns: 'Ông',
    name: 'Nguyễn Hoàng Phương',
    image: '/images/lanh-dao/nguyen-hoang-phuong.png',
    position: 'Phó Tổng giám đốc',
    role: 'Phát triển thị trường Khu vực Miền Bắc',
    content: [
      'Ông tốt nghiệp khoa Kiến trúc tại trường Đại học Xây dựng năm 1992.',
      'Mặc dù theo học ngành Kiến trúc nhưng ông đặc biệt yêu thích lĩnh vực Công nghệ thông tin. Sau khi đoạt giải Kiến trúc Quốc tế UIA năm 1994 tại Sophia, Bulgaria, ông là một trong những người tiên phong trong lĩnh vực tư vấn về nhà thông minh SmartHome với công nghệ BMS (Building Management System) của SIEMENS. Hiện nay, ông là chuyên gia tư vấn chuyển đổi số cho doanh nghiệp và các giải pháp IoT trong lĩnh vực Smartcity.',
    ],
  },
];
export default function Content() {
  return (
    <div className="my-10 grid grid-cols-10 gap-y-12">
      {LANH_DAO.map((e, idx) => (
        <div
          key={paramCase(e.name)}
          className={`${
            idx === 0 ? 'col-span-full' : 'col-span-5'
          } flex flex-col`}
        >
          <Item {...e} />
        </div>
      ))}
    </div>
  );
}

type ItemProps = {
  pronouns: string;
  name: string;
  image: string;
  position: string;
  role: string;
  content: string[];
};
function Item({ pronouns, name, image, position, role, content }: ItemProps) {
  return (
    <>
      <div className="mx-auto">
        <label
          htmlFor={`info-${paramCase(name)}`}
          className="relative cursor-pointer"
        >
          <Image src={Frame} alt="Frame" className="mx-auto" />
          <Image
            src={image}
            alt={name}
            width={250}
            height={250}
            className="absolute inset-0 h-full w-full scale-75 rounded-full object-contain"
          />
        </label>
      </div>
      <div className="mx-auto grid gap-1 text-center text-2xl">
        <p className="uppercase">{pronouns}</p>
        <p className="font-extrabold uppercase">{name}</p>
        <p>{role}</p>
        <p>{position}</p>
      </div>
      <input
        type="checkbox"
        id={`info-${paramCase(name)}`}
        className="modal-toggle"
      />
      <label
        htmlFor={`info-${paramCase(name)}`}
        className="modal cursor-pointer"
      >
        <label
          className="modal-box relative grid max-w-[1400px] grid-cols-10 rounded-none bg-white p-0"
          htmlFor=""
        >
          <label
            htmlFor={`info-${paramCase(name)}`}
            className="absolute right-10 top-8 cursor-pointer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="fill-primary"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.4818 17.025C20.1727 17.7159 20.1727 18.7908 19.4818 19.4818C19.1363 19.8273 18.714 19.9808 18.2534 19.9808C17.7927 19.9808 17.3704 19.8273 17.025 19.4818L10 12.4568L2.97505 19.4818C2.62956 19.8273 2.20729 19.9808 1.74664 19.9808C1.28599 19.9808 0.863724 19.8273 0.518234 19.4818C-0.172745 18.7908 -0.172745 17.7159 0.518234 17.025L7.54319 10L0.518234 2.97505C-0.172745 2.28407 -0.172745 1.20921 0.518234 0.518234C1.20921 -0.172745 2.28407 -0.172745 2.97505 0.518234L10 7.54319L17.025 0.518234C17.7159 -0.172745 18.7908 -0.172745 19.4818 0.518234C20.1727 1.20921 20.1727 2.28407 19.4818 2.97505L12.4568 10L19.4818 17.025Z" />
            </svg>
          </label>
          <div className="col-span-6 bg-[#F8F8F9] py-16 flex flex-col gap-y-4 text-lg px-20 text-justify">{content.map(e=>(<p>{e}</p>))}</div>
          <div className="col-span-4 flex flex-col my-10">
            <div className="mx-auto">
              <div
                className="relative cursor-pointer"
              >
                <Image src={Frame} alt="Frame" className="mx-auto" />
                <Image
                  src={image}
                  alt={name}
                  width={250}
                  height={250}
                  className="absolute inset-0 h-full w-full scale-75 rounded-full object-contain"
                />
              </div>
            </div>
            <div className="mx-auto grid gap-1 text-center text-2xl">
              <p className="uppercase">{pronouns}</p>
              <p className="font-extrabold uppercase">{name}</p>
              <p>{role}</p>
              <p>{position}</p>
            </div>
          </div>
        </label>
      </label>
    </>
  );
}
