import Markdown from '@/components/Markdown';
import { DynamicZone } from '@/types/collection';
import { Picture, Richtext } from '@/types/component';
import Image from 'next/image';

const DynamicZoneRenderer = (section: any, classStyle?: string | undefined) => {
  switch (section.__component) {
    case 'shared.rich-text':
      return (
        <p className="w-[420px] text-justify text-2xl leading-[140%]">
          <Markdown data={(section as DynamicZone<Richtext>).content} />
        </p>
      );
    case 'shared.image':
      const url = `/api${(section as DynamicZone<Picture>).file.url}`;
      return (
        <Image
          alt="THACO"
          src={url}
          width={420}
          height={230}
          sizes="100vw"
          className={classStyle}
        />
      );
  }
};
export default DynamicZoneRenderer;
