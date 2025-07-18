import React from 'react'
import { Suspense } from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import logo from '../logo.svg'
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages' // diferent way to use paths with lazy loading are on github on diferent branch
import { routes } from './routes'


export const Navigation = () => {
    return (

        <Suspense fallback={<span>Loading.....</span>}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt="React logo " />

                        <ul>
                            {routes.map(item => (
                                <li key={item.to}>
                                    <NavLink to={item.to}
                                        className={({ isActive }) => isActive ? 'nav-active' : ''}>{item.name}</NavLink>
                                </li>
                            ))}
                            {/*

                        <li>
                            <NavLink to="/lazy2"  className={ ({isActive}) => isActive ? 'nav-active' : ''} >Lazy 2</NavLink>
                        </li>

                        <li>
                            <NavLink to="/lazy3"  className={ ({isActive}) => isActive ? 'nav-active' : ''} >Lazy 3</NavLink>
                        </li> */}
                        </ul>
                    </nav>

                    <Routes>

                        {routes.map(route => (
                            <Route
                                key={route.to}
                                path={route.path}
                                element={<route.Component />}
                            />
                        ))}


                        <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
                    </Routes>

                </div>
            </BrowserRouter>

        </Suspense>

    )
}

