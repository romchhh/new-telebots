'use client';

import Image from 'next/image';
import { useScrollAnimation } from './useScrollAnimation';

interface ServiceItemProps {
  serviceKey: 'websitesPage' | 'chatbotsPage' | 'parsersPage';
  image: string;
  imagePosition: 'left' | 'right';
  t: typeof import('./translations').translations.uk;
  onOrderClick: (serviceName: string) => void;
}

export default function ServiceItem({ serviceKey, image, imagePosition, t, onOrderClick }: ServiceItemProps) {
  const service = t.services[serviceKey];
  const [contentRef, isContentVisible] = useScrollAnimation();
  const [imageRef, isImageVisible] = useScrollAnimation();
  const animationClass = imagePosition === 'left' ? 'scroll-animate-right' : 'scroll-animate-left';

  return (
    <section className="bg-white">
      <div className={`grid lg:grid-cols-2 ${imagePosition === 'left' ? 'lg:grid-flow-dense' : ''}`}>
        <div className={`p-12 lg:p-24 flex flex-col justify-center ${imagePosition === 'left' ? 'lg:col-start-2' : ''} ${animationClass} ${isContentVisible ? 'animate' : ''}`} ref={contentRef}>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-black text-black tracking-[0.3em] uppercase">
              {service.title}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6 leading-tight">
            {service.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-semibold">
            {service.subtitle}
          </p>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 font-normal">
            {service.description}
          </p>
          
          <button
            onClick={() => onOrderClick(service.title)}
            className="group flex items-center justify-center bg-black text-white px-8 py-4 hover:bg-gray-900 transition-all duration-300 w-fit rounded-full"
          >
            <span className="tracking-wider font-black">{service.button}</span>
          </button>
        </div>

        <div className={`relative h-[400px] lg:h-[600px] ${imagePosition === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''} ${imagePosition === 'left' ? 'scroll-animate-left' : 'scroll-animate-right'} ${isImageVisible ? 'animate' : ''}`} ref={imageRef}>
          <Image
            src={image}
            alt={`${service.title} - ${service.subtitle} | TeleBots`}
            width={1200}
            height={800}
            className="w-full h-full object-cover"
            loading="lazy"
            quality={85}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

