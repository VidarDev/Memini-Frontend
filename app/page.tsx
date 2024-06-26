import { Image } from '@nextui-org/image';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { Link } from '@nextui-org/link';
import React from 'react';

export default function Home() {
  return (
    <>
      <section
        className={'bg-theme-gradient relative flex min-h-[250px] flex-col rounded-b-[80px] px-4'}
      >
        <div className={'absolute right-0 top-0 z-10 flex justify-end text-[100px]'}>
          <div className={'app-bg-avatar relative pr-4 pt-8'}>
            <Image
              alt="NextUI hero Image with delay"
              className={'aspect-square h-auto w-[72px] rounded-full object-cover'}
              height={100}
              radius={'full'}
              src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
              width={100}
            />
          </div>
        </div>
        <div className={'mb-20 mt-16'}>
          <div className={'relative w-fit'}>
            <h1 className={'w-fit font-pangaia text-3xl font-bold leading-10'}>Hello Flavie,</h1>
            {/* TODO : replace */}
          </div>
        </div>
      </section>
      <section
        className={
          'app-translate-y relative flex min-h-48 flex-col items-center justify-center pb-4'
        }
      >
        <div className={'w-full px-2'}>
          <div className={'mx-auto flex w-full flex-wrap gap-y-4'}>
            <div className={'w-full px-2'}>
              <div
                className={
                  'app-min-h-card flex max-h-fit w-full flex-col gap-4 rounded-2xl bg-theme-neutral-invert px-4 py-8'
                }
              >
                <span className={'text-xl font-medium'}>Aujourd’hui, le 24/06/2024</span>
                {/* TODO : replace */}
                <div className={'flex flex-1 flex-nowrap justify-between gap-3 overflow-x-auto'}>
                  <div
                    className={
                      'flex flex-1 flex-col items-center justify-center rounded-lg bg-theme-neutral-background px-4 py-3 font-raleway'
                    }
                  >
                    <span className={'text-base font-medium'}>Jour</span>
                    {/* TODO : replace */}
                    <span className={'text-lg font-medium'}>10</span>
                    {/* TODO : replace */}
                  </div>
                  <div
                    className={
                      'flex flex-1 flex-col items-center justify-center rounded-lg bg-theme-neutral-background px-4 py-3 font-raleway'
                    }
                  >
                    <span className={'text-base font-medium'}>Jour</span>
                    {/* TODO : replace */}
                    <span className={'text-lg font-medium'}>11</span>
                    {/* TODO : replace */}
                  </div>
                  <div
                    className={
                      'flex flex-1 flex-col items-center justify-center rounded-lg bg-theme-primary-400 px-4 py-3 font-raleway text-theme-neutral-invert'
                    }
                  >
                    <span className={'text-base font-medium'}>Jour</span>
                    {/* TODO : replace */}
                    <span className={'text-lg font-medium'}>12</span>
                    {/* TODO : replace */}
                  </div>
                  <div
                    className={
                      'flex flex-1 flex-col items-center justify-center rounded-lg bg-theme-neutral-background px-4 py-3 font-raleway'
                    }
                  >
                    <span className={'text-base font-medium'}>Jour</span>
                    {/* TODO : replace */}
                    <span className={'text-lg font-medium'}>13</span>
                    {/* TODO : replace */}
                  </div>
                </div>
              </div>{' '}
            </div>
            <div className={'w-1/2 px-2'}>
              <div
                className={
                  'app-min-h-card app-album-home relative flex flex-1 rounded-2xl bg-theme-neutral-invert p-4 text-[102px]'
                }
              >
                <span className={'text-base font-medium'}>Mon album perso</span>
                {/* TODO : replace */}
              </div>
            </div>
            <div className={'w-1/2 px-2'}>
              <div
                className={
                  'app-min-h-card flex flex-1 flex-col items-center justify-center gap-2.5 rounded-2xl bg-theme-primary-400 px-4 py-5 text-theme-neutral-invert'
                }
              >
                <span className={'font-raleway text-5xl font-bold leading-10'}>3</span>
                {/* TODO : replace */}
                <span className={'font-pangaia text-base font-medium'}>nombre d’albums</span>
                {/* TODO : replace */}
              </div>
            </div>
            <div className={'w-full px-2'}>
              <div
                className={
                  'app-min-h-card relative flex aspect-video max-h-20 w-full flex-wrap gap-4 overflow-hidden rounded-2xl bg-theme-neutral-background p-4'
                }
              >
                <Link
                  className={`-m-4 flex min-h-full w-full min-w-full flex-1 gap-2 bg-transparent *:w-full *:!max-w-full`}
                  href={'/uikit'}
                >
                  <div className={'absolute flex min-h-full min-w-full *:w-full *:!max-w-full'}>
                    <Image
                      className={'min-h-full min-w-full object-cover'}
                      height={150}
                      src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                      width={400}
                      radius={'none'}
                    />
                  </div>
                  <div className={'z-10 flex h-full w-full flex-1 items-end p-4'}>
                    <span
                      className={`inline-flex min-h-10 w-fit items-center gap-2 rounded-full bg-theme-primary-400 px-6 font-raleway text-sm font-bold text-theme-neutral-invert`}
                    >
                      C’était il y a 3 mois
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
