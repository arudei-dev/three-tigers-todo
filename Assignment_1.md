### 1. How does the browser parse and render HTML? Explain the rendering pipeline.

Summary of the Rendering Pipeline:
- Receive HTML – The browser retrieves the HTML content.
- Parse HTML – The HTML is parsed into a DOM tree.
- Parse CSS – The CSS is parsed into a CSSOM tree.
- Build Render Tree – The DOM and CSSOM are combined to create the render tree.
- Layout – The layout and positioning of elements are computed.
- Paint – The elements are drawn onto layers.
- Compositing – Layers are combined and presented on screen.
- Display – The page is displayed to the user.

### 2. What is the difference between `position: relative` and `position: absolute` in CSS?

- `position: relative` moves an element from its normal position, but it still influences the layout.
- `position: absolute` removes an element from the document flow and places it in relation to a parent element with a positioning context.

### 3. How does a browser handle DNS resolution when loading a webpage?

Summary of the DNS Process:
- The user types the domain into the browser.
- The browser checks local caches (browser, OS).
- If not cached, the browser queries the DNS resolver.
- The DNS resolver queries root, TLD, and authoritative servers.
- The authoritative DNS server returns the IP address.
- The browser connects to the server using the resolved IP address.
- The browser sends an HTTP request and receives the webpage.

### 4. What is CSRF (Cross-Site Request Forgery), and how do you defend against it?

CSRF (Cross-Site Request Forgery) is an attack where a malicious site tricks a user into making unwanted requests to a site where they’re authenticated (e.g., transferring money, changing account settings). It exploits the trust a website has in the user's browser.

Defenses against CSRF includes: generating a unique token for each request, check that requests come from the expected source through referer/origin header, require re-authentication or 2FA for sensitive actions, and more.

### 5. Explain how React's useEffect hook works, and give an example of its usage.

The useEffect hook in React allows you to perform side effects in functional components, such as fetching data, updating the DOM, or setting up subscriptions. It runs after the component renders and can be configured to run only once or whenever certain dependencies change.

Example
```jsx
import { useEffect, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // useEffect runs after every render and logs the current count
  useEffect(() => {
    console.log(`Count has changed: ${count}`);
  }, [count]); // Runs only when 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
In this example, useEffect will log the current count value every time the button is clicked and the state updates.

### 6. `useMemo` and `useCallback` are optimization hooks in React. In what situations should each be used, and what precautions should be taken? Please explain with specific examples.

- `useMemo`: If the result of a computation depends on specific dependencies and you want to avoid recalculating unless those dependencies change. However, if the computation is cheap, memoization may introduce overhead rather than improving performance.

Example:
```tsx
import { useMemo, useState } from 'react';

function ExpensiveComponent({ num }) {
  // Expensive calculation
  const computedValue = useMemo(() => {
    console.log('Recomputing expensive calculation');
    return num * 1000;
  }, [num]);

  return <div>{computedValue}</div>;
}
```

- `useCallback`: If the function is passed down to child components or used inside useEffect or useMemo to avoid unnecessary re-renders. However, it can add complexity without a significant performance benefit if the function doesn't depend on specific props or state.

Example:
```tsx
import { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Memoize the callback function to prevent re-creation on every render
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); // Only re-create if dependencies change (none in this case)

  return <ChildComponent onClick={increment} />;
}

function ChildComponent({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Increment</button>;
}
```

### 7. Server-side rendering (SSR) and client-side rendering (CSR) in Next.js each have their own advantages and disadvantages. Explain the differences between them and discuss which type should be used for different applications, providing specific examples.

How SSR Works:
- In SSR, the HTML is generated on the server for each request and then sent to the client. When a user requests a page, the server fetches data, processes the page, and sends the complete HTML to the browser.
- Once the HTML is loaded, React "hydrates" the page, adding interactivity via JavaScript. Hydration is the process of attaching event listeners and making the page interactive without having to re-render the entire page.

How CSR Works:
- In CSR, the browser requests a minimal HTML file from the server, and the JavaScript required to render the page is downloaded afterward. The React app then runs in the browser and dynamically fetches data using APIs (often through JavaScript frameworks like React, Vue, or Angular).
- The page is rendered in the browser after the JavaScript and API calls complete.

Use SSR when:

- SEO is important (e.g., blogs, marketing pages).
- Data needs to be fresh on each page load (e.g., real-time data, e-commerce sites).
- You want to deliver a fast first-paint (i.e., content is visible immediately).

Use CSR when:

- SEO is not a major concern (e.g., internal tools, dashboards).
- Interactivity and smooth client-side transitions are a priority (e.g., SPAs, social platforms).
- You want to offload rendering from the server and rely on client-side logic.

### 8. Explain Single responsibility principle, Open/closed principle.

- **Single Responsibility Principle (SRP)**: A class should have only one reason to change, meaning it should only have one job or responsibility. This makes the class easier to understand, maintain, and modify.

- **Open/Closed Principle (OCP)**: Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification. This means you can add new functionality without changing existing code, typically by using inheritance or interfaces.

### 9. Explain Scalability, Maintainability, Readability.

- **Scalability**: The ability of a system to handle an increasing amount of work or its potential to accommodate growth, either by adding resources (vertical scalability) or by distributing the load across multiple systems (horizontal scalability).

- **Maintainability**: The ease with which a system can be modified to correct defects, improve performance, or adapt to new requirements over time, typically influenced by code quality, documentation, and modular design.

- **Readability**: The clarity and ease with which a human can understand the code, which is crucial for collaboration, debugging, and long-term maintenance. This includes consistent naming, proper indentation, and logical organization.

### 10. What is important when developing in a team? provide your own opinion with your concrete episode.

In my opinion, having good team dynamics among your members is fundamental when developing a team, and is key to ensuring its long-term stability and sustainability.

When team members work well together, it not only fosters a positive and productive work environment, but also enhances collaboration, creativity, and problem-solving. Strong dynamics contribute to better communication, trust, and mutual respect, which are key ingredients for a team to navigate challenges effectively and adapt over time.

For instance, in my own team we have a leader that tends to the relationships between us and care of our wellbeings as well as themselves. They also make sure to watch over any troubles that might happen without becoming too micro-managing.

Moreover, when people feel supported and valued by their teammates, they are more likely to stay engaged, motivated, and committed. It's the foundation for not just short-term success, but also for sustaining high performance in the long run. This is well reflected in my team with us having little celebratory events anytime we succeeded in something, such as a project well done, a bug well solved, etc.
