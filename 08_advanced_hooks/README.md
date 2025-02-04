# Advanced Hooks (BONUS Lecture)

## **SWBAT (Students Will Be Able To):**
- Determine when to use `useContext` instead of local state variables for global state management.
- Utilize `useMemo` and `useCallback` to optimize performance in React applications.
- Implement a custom hook (`useFetch`) to handle data fetching efficiently.

## **Lecture Topics:**
- **`useContext`**: Managing global state, such as theme or user preferences, without prop drilling.
- **`useCallback`**: Memoizing callback functions to prevent unnecessary re-renders in child components.
- **`useMemo`**: Optimizing expensive computations like filtering, sorting, or mapping data.
- **Custom Hook (`useFetch`)**: Abstracting fetch logic into a reusable hook.

## **Deliverables:**
- A working example demonstrating `useContext` for global styles.
- Implementation of `useCallback` to prevent unnecessary re-creation of event handlers.
- A performance-optimized component using `useMemo` for computationally heavy operations.
- A short exercise where students refactor a component to improve performance using memoization hooks.
- **Bonus**: Implement and test a `useFetch` custom hook to streamline API requests.
