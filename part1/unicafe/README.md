# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Yes, I can attempt to extract the text from the screenshot using Optical Character Recognition (OCR). Let me do that for you.

Thank you for your patience. Here's the extracted problem statement:

---

**1.6: unicafe step1**

Like most companies, the student restaurant of the University of Helsinki, Unicafe, collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.

The application must display the total number of collected feedback for each category. Your final application could look like this:

```
give feedback
good neutral bad

statistics
good 6
neutral 2
bad 1
```

Note that your application needs to work only during a single browser session. Once you refresh the page, the collected feedback is allowed to disappear.

---

Based on the problem statement, here's a breakdown of the steps to implement the solution:

1. **Initialization**:
   - Create a new React application (possibly using `create-react-app` or any other setup you're familiar with).

2. **State Management**:
   - Define the state to keep track of feedback counts for "good", "neutral", and "bad".

3. **UI Components**:
   - Create a section titled "give feedback" with buttons for each feedback option: "good", "neutral", and "bad".
   - Create a section titled "statistics" to display the counts for each feedback type.

4. **Event Handling**:
   - Implement event handlers for each button to update the state when a user gives feedback.

5. **Displaying Feedback**:
   - Display the current counts of each feedback type in the "statistics" section.

6. **Session Persistence**:
   - Understand that data persistence across browser sessions is not required for this project. Feedback counts can reset when the page is refreshed.

7. **Styling (Optional)**:
   - Style the application for better user experience, though this wasn't explicitly mentioned in the problem statement.

8. **Testing**:
   - Test the application by giving feedback and ensuring the statistics update correctly.

9. **Review**:
   - Go through the requirements again to ensure all aspects of the problem statement are addressed.

10. **Refinement (Optional)**:
   - Look for opportunities to refine the code, improve structure, or enhance the user interface.

With these steps, you should have a structured approach to tackle the problem. Good luck with your implementation!

Certainly! Here's a step-by-step breakdown of how you can expand your application based on the new requirements:

1. **Add New State Variables**:
   - Introduce additional state variables if needed. However, you can derive the total, average, and positive feedback percentage from the existing state (`good`, `neutral`, `bad`).

2. **Calculate Total Feedback**:
   - Calculate the total number of feedback by summing the counts of `good`, `neutral`, and `bad`.

3. **Calculate Average Score**:
   - Using the weights provided (good: 1, neutral: 0, bad: -1), calculate the average score. 
   - Formula: \(\text{average} = \frac{{(\text{good} \times 1) + (\text{neutral} \times 0) + (\text{bad} \times -1)}}{{\text{total feedback}}}\)

4. **Calculate Positive Feedback Percentage**:
   - Determine the percentage of positive feedback out of the total feedback.
   - Formula: \(\text{positive percentage} = \frac{{\text{good}}}{{\text{total feedback}}} \times 100\)

5. **Update the Display Component**:
   - Modify the `Display` component (or create a new component, e.g., `Statistics`) to show the total feedback, average score, and positive feedback percentage.

6. **Handle Zero Feedback Case**:
   - Before displaying statistics, check if the total feedback count is zero. If it is, consider displaying a message like "No feedback given" instead of the statistics, to avoid division by zero or showing misleading data.

7. **Styling (Optional)**:
   - Style the new statistics to make them visually distinct and easy to read. Consider using different font weights, colors, or other styling techniques.

8. **Testing**:
   - Test your application by providing various feedback and ensuring that the statistics update correctly.
   - Pay special attention to edge cases, like ensuring that the application doesn't crash or display incorrect data when no feedback has been given.

9. **Review**:
   - Go through the new requirements again to ensure that all aspects have been addressed and that the application displays the correct statistics based on the provided feedback.

10. **Refinement (Optional)**:
   - As always, look for opportunities to refine your code, improve its structure, or enhance the user experience.

With these steps, you should be able to expand your feedback application to display more detailed statistics based on the collected feedback.
