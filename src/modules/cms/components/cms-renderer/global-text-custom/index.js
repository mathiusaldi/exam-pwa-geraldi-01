/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable consistent-return */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import cx from 'classnames';
import React from 'react';
import { BREAKPOINTS } from '@core/theme/vars';

const WidgetSliderCarousel = (props) => {
    const {
        storeConfig = {},
    } = props;

    if (storeConfig && storeConfig.welcome) {
        return (
            <div>
                <div className={cx('slider-container', 'h-[45px]',
                    'overflow-hidden', 'text-center', 'p-[8px_25%]')}
                >
                    {storeConfig.welcome}
                </div>
                <style jsx>
                    {`
                        .close-btn-widget-slider {
                            background: none;
                        }
                        .slider-container {
                            height: 45px;
                            overflow: hidden;
                            text-align: center;
                            padding: 8px 25%;
                            font-size: 14px;
                            justify-content: center;
                        }

                        @media (max-width: ${BREAKPOINTS.md - 1}px) {
                            .slider-container {
                                height: auto;
                                padding: 5px 10px;
                                font-size: 12px;
                            }
                        }

                        .btn-bar {
                            display: none;
                        }
                    `}
                </style>
            </div>
        );
    }
    return null;
};

export default WidgetSliderCarousel;
