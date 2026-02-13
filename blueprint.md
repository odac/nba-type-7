
# PPSB - AI-Driven Sales Enablement Platform

## Overview

This document outlines the plan and implementation details for the PPSB (Personalized Priority Sales Banking) platform. PPSB is a web application built with React and Material-UI, designed to assist Corporate Banking Relationship Managers. It uses simulated data to identify priority clients and provide actionable insights.

## Design & Brand Identity

*   **Reference Theme:** POSB (Singapore) website (posb.com.sg)
*   **Color Scheme:**
    *   Primary: Deep Blue (`#004684`)
    *   Secondary/Action: Bright Yellow (`#FFD200`)
    *   Background: Light Grey/White (`#f4f6f8`)
*   **Typography:** Roboto (MUI default)
*   **Compliance:** Google Material Design, WCAG 2.1 AA

## Implemented Features

This is the initial build. All features listed below are part of the current implementation plan.

## Plan & Steps for Current Request

1.  **Clean Up:** Remove boilerplate files from the initial project setup.
2.  **Install Dependencies:**
    *   `@mui/material @emotion/react @emotion/styled`
    *   `recharts`
    *   `react-router-dom`
3.  **Project Structure:**
    *   `src/components`: For UI components (Header, Cards, etc.).
    *   `src/data`: For simulated datasets and logic.
    *   `src/pages`: For main application views (Priority, Dashboard).
    *   `src/theme`: For MUI theme configuration.
4.  **Data Simulation:** Create mock data for clients, transactions, and market trends. Implement logic to determine the top 3 priority clients.
5.  **Theme Configuration:** Create a custom MUI theme reflecting the POSB-inspired color palette.
6.  **Component Development:**
    *   **Header:** Create a responsive header with a logo placeholder and a search bar.
    *   **Priority View:** Display the top 3 clients using styled "Priority Call Cards."
    *   **Dashboard View:**
        *   Client Profile Summary.
        *   `Recharts` line chart for financial trends.
        *   "Next Best Action" (NBA) and "Conversation Starter" sections.
        *   A "Market Research" button that opens a modal with more details.
7.  **Routing:** Implement client-side routing using `react-router-dom` to navigate between the main priority view and individual customer dashboards.
8.  **Main Application:** Assemble all components and pages in `App.jsx`, providing the theme and routing context.
9.  **Entry Point:** Configure `src/main.jsx` to render the React application.
10. **Final Touches:** Update `index.html` and ensure all parts are working together seamlessly.

