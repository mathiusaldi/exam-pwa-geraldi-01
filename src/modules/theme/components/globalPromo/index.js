/* eslint-disable no-unused-vars */
import React from 'react';
import Skeleton from '@common_skeleton';
import GlobalPromoCarousel from '@core_modules/cms/components/cms-renderer/global-text-custom';
import cx from 'classnames';

const GlobalPromoMessage = (props) => {
    const {
        // prettier-ignore
        storeConfig,
        ...other
    } = props;

    if (!storeConfig) {
        return (
            <div id="global-promo-message-skeleton">
                <Skeleton height={38} className={cx('!top-[10px]', '!left-[25%]', '!w-[50vw]')} />
            </div>
        );
    }

    if (storeConfig && storeConfig.welcome) {
        return (
            <>
                <div
                    id="global-promo-message"
                    className={cx(
                        'global-promo-message',
                        'h-[38px]',
                        'text-center',
                        'font-normal',
                        'tablet:text-base',
                        'mobile:max-tablet:text-sm',
                        'bg-primary-500',
                        'text-neutral-white',
                        'mobile:max-tablet:py-1',
                    )}
                >
                    <GlobalPromoCarousel
                        className={cx('relative', 'flex', 'justify-center', 'tablet:max-w-screen-tablet', 'desktop:max-w-screen-desktop', 'mx-auto')}
                        storeConfig={storeConfig}
                        {...other}
                    />
                </div>
            </>
        );
    }

    return null;
};

export default GlobalPromoMessage;
