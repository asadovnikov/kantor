import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Container, Button, List, ListItem } from '@material-ui/core';

import projectLogo from '../../../assets/images/react.svg';
import { NavLink } from 'react-router-dom';

import { FlagIcon } from 'react-flag-kit';

export default function LivePreviewExample() {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <>
      <div className="header-top-section py-3">
        <Container className="d-flex header-nav-menu justify-content-between align-items-center navbar-dark">
          <ul className="d-flex">
            {/* <li>
              <Button
                variant="text"
                className="rounded-sm d-30 p-0 btn-icon btn-transition-none"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={['far', 'bell']}
                    className="font-size-sm"
                  />
                </span>
              </Button>
            </li> */}
            <li>
              <a
                className="rounded-sm py-1 px-3 font-size-xs text-uppercase"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Exchange Rates
                <span className="opacity-5 dropdown-arrow">
                  <FontAwesomeIcon icon={['fas', 'angle-down']} />
                </span>
              </a>
              <div className="submenu-dropdown submenu-dropdown--sm">
                <div className="shadow-sm-dark bg-white rounded-sm">
                  <List
                    component="div"
                    className="nav-pills nav-neutral-primary flex-column p-2">
                    <ListItem
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-3 d-flex align-items-center">
                      <span className="mr-3">
                        <FlagIcon code="US" size={28} />
                      </span>
                      <span>Bitcoin</span>
                    </ListItem>
                    <ListItem
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-3 d-flex align-items-center">
                      <span className="mr-3">
                        <FlagIcon code="ES" size={28} />
                      </span>
                      <span>Ethereum</span>
                    </ListItem>
                  </List>
                </div>
              </div>
            </li>
          </ul>
          <ul className="d-flex">
            <li className="mr-0">
              <a
                className="rounded-sm py-1 px-3 font-size-xs text-uppercase"
                href="https://dev.kantor.kosevych.info/">
                Members Login
              </a>
            </li>
          </ul>
        </Container>
      </div>
      <Container>
        <div className="bg-white-10 p-2 header-nav-wrapper header-nav-wrapper-xl rounded px-4 navbar-dark">
          <div className="app-nav-logo">
            <NavLink
              to="/Home"
              title="Kantor Crypto Shop"
              className="app-nav-logo app-nav-logo--light">
              <div className="app-nav-logo--icon shadow-second-sm bg-secondary border-0">
                <img alt="Kantor Crypto Shop" src={projectLogo} />
              </div>
              <div className="app-nav-logo--text">
                <span>Crypto</span>

                <b>Kantor Shop</b>
              </div>
            </NavLink>
          </div>
          <div className="header-nav-menu d-none d-lg-block">
            <ul className="d-flex nav nav-neutral-first justify-content-center">
              <li>
                <NavLink
                  to="/Overview"
                  className="font-weight-bold rounded-sm text-white px-3">
                  Overview
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/BuySell"
                  className="font-weight-bold rounded-sm text-white px-3">
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Settings"
                  className="font-weight-bold rounded-sm text-white px-3">
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
            <span className="d-none d-lg-block">
              <Button
                component="a"
                href="http://localhost:3001/signup"
                className="rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm btn-warning">
                Register
              </Button>
            </span>
            <span className="d-block d-lg-none">
              <button
                onClick={toggle}
                className={clsx('navbar-toggler hamburger hamburger--elastic', {
                  'is-active': collapse
                })}>
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </span>
          </div>
        </div>
      </Container>
      <div
        className={clsx('collapse-page-trigger', { 'is-active': collapse })}
        onClick={toggle}
      />
    </>
  );
}
