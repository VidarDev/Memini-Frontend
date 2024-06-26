import React from 'react';
import { Slider } from '@nextui-org/slider';

import ThemedSwitch from '@/components/ThemedSwitch';

export default function Home() {
  return (
    <>
      <section
        className={
          'bg-theme-primary-200 relative flex min-h-[250px] flex-col rounded-b-[80px] px-4'
        }
      >
        <div className={'mb-20 mt-8 flex flex-col gap-8'}>
          <span className={'memicon-arrow px-4 text-5xl'} />
          <div className={'relative w-fit'}>
            <h1 className={'w-fit font-pangaia text-3xl font-bold leading-10'}>Paramètres</h1>
            {/* TODO : replace */}
          </div>
        </div>
      </section>
      <section
        className={'app-translate-y-3 relative flex flex-col items-center justify-center pb-4'}
      >
        <div className={'flex w-full flex-col items-center justify-center gap-4 px-4'}>
          <div className={'flex w-fit items-center gap-8 rounded-2xl bg-theme-neutral-invert p-6'}>
            <div className="font-pangaia text-xl font-medium text-black">Notifications</div>
            <ThemedSwitch />
          </div>
        </div>
        <div className={'mt-8 flex w-full flex-col gap-4 px-4'}>
          <h2 className="font-pangaia text-xl font-medium text-theme-neutral">
            Quantité préférentielle
          </h2>
          <Slider
            aria-label="Temperature"
            className="themed-slider"
            defaultValue={0.7}
            maxValue={1}
            minValue={0}
            size="md"
            step={0.01}
          />
          <div className={'flex w-full items-center justify-between'}>
            <span className="w-16 text-center font-raleway text-sm font-normal leading-tight text-theme-neutral">
              1 fois par semaine
            </span>
            <span className="w-16 text-center font-raleway text-sm font-normal leading-tight text-theme-neutral">
              3 fois par semaine
            </span>
            <span className="w-16 text-center font-raleway text-sm font-normal leading-tight text-theme-neutral">
              chaque jour
            </span>
          </div>
        </div>
        <div className={'mt-8 flex w-full flex-col gap-4 px-4'}>
          <div className={'flex w-full items-center justify-between'}>
            <h2 className="font-pangaia text-xl font-medium text-theme-neutral">
              Créneau de rappel
            </h2>
            <span className="text-center font-raleway text-sm font-normal leading-tight text-theme-neutral">
              13h - 15h
            </span>
          </div>
          <Slider
            aria-label="Temperature"
            className="themed-slider two-value"
            defaultValue={[0.7, 0.8]}
            maxValue={1}
            minValue={0}
            size="md"
            step={0.01}
          />
        </div>
      </section>
    </>
  );
}
