# Client Side Routing

## SWBATs:

- [ ] Review the difference between server-side and client-side routing
- [ ] Observe a refactor to include client-side routing using React Router V6.4+

## Deliverables

#### 1. Set Up Routing with createBrowserRouter and RouterProvider
- Demonstrate how to create a router using createBrowserRouter.
- Show how to define routes as objects with path, element, and errorElement.
- Explain how to wrap the app with RouterProvider and pass the router instance.

#### 2. Route Hierarchy and Nested Routes
- Explain parent-child routes and how nested routes inherit layouts.
- Introduce <Outlet> to allow child components to be rendered inside parent routes.
- Show how to pass context from a parent route to children using useOutletContext.

#### 3. Error Handling with useRouteError and Custom Error Components
- Show how to define an errorElement inside route objects.
- Demonstrate using useRouteError inside an ErrorComponent to display dynamic error messages.
- Explain why defining error boundaries at multiple levels improves UX.

### 4. Leverage Routing Hooks
- useNavigation → Show how to track the current loading state of a route.
- useLocation → Explain how to access the current route’s path and state.
- useParams → Demonstrate how to extract dynamic route parameters (e.g., /projects/:id).

#### Bonus: Loaders for Data Fetching
- Explain how to use loader functions to fetch data before rendering.
- Show how to access loaded data using useLoaderData().
- Compare using loader vs. fetching inside useEffect.

