import React from 'react';

import { Grid, Container } from '@material-ui/core';

import Slider from 'react-slick';
import { applicationFullName } from '../../../utils/const';

import illustration1 from '../../../assets/images/illustrations/kantor/taxi-successful-business.svg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="z-over pb-5" style={{ marginTop: '-50px' }}>
        <Container className="pb-3 pb-xl-5">
          <Grid container spacing={6}>
            <Grid item xl={6} className="d-none d-xl-flex align-items-center">
              <img alt="..." className="w-100" src={illustration1} />
            </Grid>
            <Grid item xl={6}>
              <div className="py-0 pb-5 py-xl-5">
                <div className="pr-0 pr-xl-5">
                  <h1 className="display-3 mb-3 font-weight-bold">
                    {applicationFullName}
                  </h1>
                  <p className="font-size-lg text-black-50">
                    Welcome to reliable crypto shop with mature approach for
                    trading crypto currencies.
                  </p>
                </div>
                <div className="d-block mt-4">
                  <Slider
                    slidesToShow={2}
                    slidesToScroll={2}
                    dots={true}
                    className="slick-slider slider-dots-outside slick-slider-left">
                    <div>
                      <div className="feature-box pr-4">
                        <h3 className="font-size-lg font-weight-bold my-3">
                          <a
                            className="text-first"
                            href="#/"
                            onClick={(e) => e.preventDefault()}>
                            Ease of trading
                          </a>
                        </h3>
                        <p className="text-black-50 mb-3">
                          {/* <ul>
                            <li>Simple interface</li>
                            <li>No withdrawal limits</li>
                            <li>Cash out directly to your bank</li>
                          </ul> */}
                          Simple interface <br /> No withdrawal limits
                          <br /> Cash out directly to your bank
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="feature-box pr-4">
                        <h3 className="font-size-lg font-weight-bold my-3">
                          <a
                            className="text-first"
                            href="#/"
                            onClick={(e) => e.preventDefault()}>
                            First-grade Security
                          </a>
                        </h3>
                        <p className="text-black-50 mb-3">
                          98% of assets in cold storage <br />
                          Highly encrypted personal data <br />
                          Internal controls limit errors
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="feature-box pr-4">
                        <h3 className="font-size-lg font-weight-bold my-3">
                          <a
                            className="text-first"
                            href="#/"
                            onClick={(e) => e.preventDefault()}>
                            Proven Reliability
                          </a>
                        </h3>
                        <p className="text-black-50 mb-3">
                          24/7 dedicated support <br />
                          Industry-leading uptime
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
