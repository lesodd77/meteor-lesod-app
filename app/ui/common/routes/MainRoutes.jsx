import React from 'react'
import { App } from '../../App'
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';
import { RoutePaths } from './RoutePaths'
import { About } from '../../pages/About'
import { Registration } from '../../pages/Registration'
import { LoginPage } from '../../auth/LoginPage'
import { SignedIn } from '../../auth/SignedIn'
import { ContactForm } from '../forms/ContactForm'
import { Testimonials } from '../../pages/Testimonials.jsx';
import { Todo } from '../../todo/Todo'
import { Gallery } from '../../pages/Gallery'
import { Home } from '../../pages/Home'
import { Projects } from '../../pages/Projects'
import { UpComingProjects } from '../../pages/UpComingPojects'
import { NotFound } from '../NotFound';


export const MainRoutes = () => {
  return (
    <BrowserRouter>
    <ReactRoutes>
         <Route path={RoutePaths.ROOT} element={<App />}>
         <Route element={<Home />} path={RoutePaths.HOME} />
          <Route element={<LoginPage />} path={RoutePaths.LOGINPAGE} />
          <Route element={<About />} path={RoutePaths.ABOUT} />
          <Route element={<Gallery />} path={RoutePaths.GALLERY} />
          <Route element={<Projects />} path={RoutePaths.PROJECTS} />
          <Route element={<SignedIn />} path={RoutePaths.SIGNEDIN} />
          <Route element={<Todo />} path={RoutePaths.TODO} />
          <Route element={<ContactForm />} path={RoutePaths.CONTACTFORM} />
          <Route element={<Registration />} path={RoutePaths.REGISTRATION} />
          <Route element={<Testimonials />} path={RoutePaths.TESTIMONIALS} />
          <Route element={<UpComingProjects />} path={RoutePaths.UPCOMINGPROJECTS} />
          <Route element={<NotFound />} path="*" />
          </Route>
      </ReactRoutes>
    </BrowserRouter>
    
  )
}
