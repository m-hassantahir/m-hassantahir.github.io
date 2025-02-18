---
layout: page
title: "Compsee"
permalink: /project1
---

# Sales Tracking Dashboard for CompSee Ecommerce using Microsoft Power BI

<a href="https://m-hassantahir.github.io/project1"> Click here to go to the github repository </a>

## Table of Contents

- [Sales Tracking Dashboard for CompSee Ecommerce using Microsoft Power BI](#sales-tracking-dashboard-for-compsee-ecommerce-using-microsoft-power-bi)
  - [Table of Contents](#table-of-contents)
  - [1. Importing the Compsee Ecommerce Data](#1-importing-the-compsee-ecommerce-data)
  - [2. Data Cleaning and Transformation in Power Query](#2-data-cleaning-and-transformation-in-power-query)
  - [3. Building Relationships Between Tables](#3-building-relationships-between-tables)
  - [4. Creating the Dashboard](#4-creating-the-dashboard)
    - [4.1 Adding a Dashboard Heading](#41-adding-a-dashboard-heading)
    - [4.2 Designing the "Profit by Month" Chart](#42-designing-the-profit-by-month-chart)
    - [4.3 Adding Conditional Formatting](#43-adding-conditional-formatting)
  - [5. Customizing the Dashboard](#5-customizing-the-dashboard)
  - [6. Sum of Profit by Sub-Category](#6-sum-of-profit-by-sub-category)
    - [6.1 Creating a Stacked Bar Chart](#61-creating-a-stacked-bar-chart)
  - [7. Sum of Quantity by Category](#7-sum-of-quantity-by-category)
    - [7.1 Designing and Formatting a Pie Chart](#71-designing-and-formatting-a-pie-chart)
    - [7.2 Creating a Pie Chart for Payment Mode](#72-creating-a-pie-chart-for-payment-mode)
  - [8. Creating Cards for Key Metrics](#8-creating-cards-for-key-metrics)
    - [8.1 Total Amount, Quantity, and Profit Cards](#81-total-amount-quantity-and-profit-cards)
    - [8.3 Layout Adjustments](#83-layout-adjustments)
  - [9. Creating and Formatting Additional Charts](#9-creating-and-formatting-additional-charts)
    - [9.1 Bar Chart for Top N Statuses](#91-bar-chart-for-top-n-statuses)
  - [10. Adding Slicers](#10-adding-slicers)
    - [10.1 Quarter Filter](#101-quarter-filter)
    - [10.2 State-Based Filter](#102-state-based-filter)
  - [11. Final Adjustments and Testing](#11-final-adjustments-and-testing)
  - [12. Final Outcome](#12-final-outcome)
  - [13. Features of the Project](#13-features-of-the-project)
    - [13.1 Comprehensive Data Visualization:](#131-comprehensive-data-visualization)
    - [13.2 Dynamic and Interactive Filters:](#132-dynamic-and-interactive-filters)
    - [13.3 Data Modeling and Relationships:](#133-data-modeling-and-relationships)
    - [13.4 Custom Metrics and Calculations:](#134-custom-metrics-and-calculations)
    - [13.5 Enhanced User Interface Design:](#135-enhanced-user-interface-design)
    - [13.6 Advanced Data Transformation:](#136-advanced-data-transformation)
  - [14. Skills Demonstrated](#14-skills-demonstrated)
    - [14.1 Data Visualization:](#141-data-visualization)
    - [14.2 Power Query Proficiency:](#142-power-query-proficiency)
    - [14.3 Data Modeling:](#143-data-modeling)
    - [14.4 Dashboard Design:](#144-dashboard-design)
    - [14.5 DAX Formulas:](#145-dax-formulas)
    - [14.6 Chart Customization:](#146-chart-customization)
    - [14.7 Analytical Thinking:](#147-analytical-thinking)
    - [14.8 Attention to Detail:](#148-attention-to-detail)


---

## 1. Importing the Compsee Ecommerce Data

The project data consisted of two CSV files:

- **Orders Table**: Contained customer and order details.

- **Order Details Table**: Included payment modes, amounts, and product information.

![alt text](image-13.png)

I used the **Get Data** feature to import these tables into Power BI. Each table appeared in the "Fields" pane, making it easy to work with the data.

## 2. Data Cleaning and Transformation in Power Query

Before analysis, I cleaned the data using **Power Query**:

- I changed data types (e.g., text to date for the order date).

- Removed unnecessary columns to streamline the dataset.

- Split columns for better organization.

- Removed duplicates to ensure clean data.

I also created a **custom column** by dividing "Amount" by "Quantity" to Average of Sales (AOV).

![alt text](image-20.png)

Additionally, I used the **Group By** feature to aggregate data, such as summing up sales by category.

Once transformations were complete, I clicked **Close & Apply** to load the cleaned data into the model.

## 3. Building Relationships Between Tables

In the **Model View**, I established relationships between the Orders and Order Details tables:

- I linked the **Order ID** column from both tables to create a relationship.

- I defined the cardinality as **One-to-Many** since one order ID could have multiple details.

- I ensured the relationship was active for seamless data analysis.

This setup allowed me to generate accurate visualizations by combining data from both tables.

![alt text](image-14.png)

## 4. Creating the Dashboard

To design the dashboard, I followed these steps:

### 4.1 Adding a Dashboard Heading

- I inserted a **Text Box** and typed "Compsee E-commerce Sales" as the heading.

- I formatted the text by centering it, making it bold, and resizing the text box for a professional look.

### 4.2 Designing the "Profit by Month" Chart

1. **Adding the Chart**:

    - I selected a **Column Chart** from the visualization pane.

    - I dragged the "Order Date" field to the X-axis and the "Profit" field to the Values section.

2. **Fixing Data Issues**:

    - The date column was initially set to text. I changed its format to "Date" in the Data View, which resolved display issues.

    - I expanded the date to show months (e.g., January, February).

3. **Formatting the Chart**:

    - I removed gridlines and adjusted axis titles for clarity.

    - I set a background color and increased transparency for visual appeal.

    - I changed the column colors and applied **conditional formatting** to differentiate high and low profits using red and green shades.

4. **Adjusting Dimensions**:

    - I manually resized the chart and added a border with rounded corners for a sleek appearance.

5. **Adding a Title**:

    - I named the chart "Profit by Month" and aligned the title to the center.

    - I formatted the title to match the dashboard's color scheme.

### 4.3 Adding Conditional Formatting

- I applied conditional formatting to the columns so that positive values were blue and negative values were red, making it easy to interpret the data at a glance.

![alt text](image-15.png)

## 5. Customizing the Dashboard

I further refined the dashboard by:

- Adding a canvas background image that complemented the theme.

- Formatting text, adjusting transparency, and ensuring a cohesive layout.

- Refreshing the data to reflect any updates made during the project.

## 6. Sum of Profit by Sub-Category

### 6.1 Creating a Stacked Bar Chart

1. Created a **Stacked Bar Chart**:

    - Set "Sub-Category" as the X-axis.

    - Added "Profit" as the value to visualize contributions by sub-category.

    - Resized the chart for clarity.

2. Applied Filters for Top Categories:

    - Enabled a **Top N Filter** to display the top 5 sub-categories based on profit.

    - Sorted by profit to highlight top contributors.

3. Used the **Format Painter**:

    - Copied formatting from other charts for consistent styling.

4. Final Adjustments:

    - Changed column colors and increased value text size for better readability.

![alt text](image-16.png)

## 7. Sum of Quantity by Category

### 7.1 Designing and Formatting a Pie Chart

1. Designed a **Pie Chart**:

    - Added "Category" to the Legend field and "Quantity" to Values.


    Used the **Format Painter** for consistency with other visuals.

2. Customized the Chart:

    - Adjusted slice colors and spacing for a clean look.

    - Increased text size and removed unnecessary decimal places.

    - Disabled legends and headers for simplicity.

![alt text](image-17.png)

### 7.2 Creating a Pie Chart for Payment Mode

- Duplicated the existing pie chart.

- Replaced "Category" with "Payment Mode" to visualize payment distributions.

- Resized and formatted the new chart for readability.

![alt text](image-18.png)
## 8. Creating Cards for Key Metrics

### 8.1 Total Amount, Quantity, and Profit Cards

1. Created **Cards** for metrics like Total Amount, Quantity, and Profit:

    - Used the **Card Visualization** and added relevant fields.

    - Applied the **Format Painter** for consistent styling.

2. Created a Metric for Average Order Value:

    - Added a new column: Average Order Value = Amount / Quantity.

    - Displayed this metric using a card visualization.

![alt text](image-21.png)

### 8.3 Layout Adjustments

- Ensured all cards were of the same size and aligned for a balanced layout.

## 9. Creating and Formatting Additional Charts

### 9.1 Bar Chart for Top N Statuses

1. Designed a **Bar Chart** for Top N statuses:

    - Added "Status" and "Amount" fields.

    - Applied a Top N filter to show the top 5 statuses.

    - Adjusted axis and label formatting.

2. Chart for Top Customers:

    - Used a **Stacked Bar Chart** for "Customer Name" and "Amount."

    - Applied a Top N filter to highlight top spenders.

    - Used the **Format Painter** for styling consistency.

![alt text](image-22.png)
![alt text](image-23.png)

## 10. Adding Slicers

### 10.1 Quarter Filter

1. Added a **Slicer** for "Quarter":

    - Changed the style to a drop-down format.

    - Used the **Format Painter** for consistency.

### 10.2 State-Based Filter

- Added a slicer for "State" to filter data by region.

- Customized the layout and formatting for cohesion.

![alt text](image-24.png)

## 11. Final Adjustments and Testing

1. Ensured alignment and consistent sizing of all elements.

2. Verified interactivity of filters, ensuring slicers updated the dashboard dynamically.

3. Refined formatting, including colors, labels, and font sizes for better readability.

![alt text](image-25.png)

## 12. Final Outcome

The final dashboard provided a comprehensive view of Compsee Ecommerce's sales performance, including:

- Key metrics displayed via cards.

- Insightful visualizations like column charts, pie charts, and bar charts.

- Filters for quarters and states for enhanced interactivity.

- A polished, professional layout with cohesive styling.

## 13. Features of the Project

### 13.1 Comprehensive Data Visualization:

- Developed interactive dashboards with Power BI for sales tracking and business insights.

- Included multiple chart types (column, bar, pie, stacked bar charts) tailored to the client's needs.

### 13.2 Dynamic and Interactive Filters:

- Added slicers for filters based on states, quarters, and categories for easy data exploration.

- Created interactive visuals that dynamically respond to user inputs.

### 13.3 Data Modeling and Relationships:

- Managed and visualized relationships between multiple tables in Model View.

- Defined and optimized cardinalities for better data integration.

### 13.4 Custom Metrics and Calculations:

- Created calculated columns (e.g., Average Order Value) and custom aggregations (e.g., total sales, profit).

- Added conditional formatting for enhanced readability and insights.

### 13.5 Enhanced User Interface Design:

- Applied consistent formatting and styling across all visual elements.

- Incorporated tools like Format Painter to maintain design uniformity.

### 13.6 Advanced Data Transformation:

- Used Power Query to clean, manipulate, and transform raw data into a usable format.

- Grouped data and created custom columns for detailed analysis.

## 14. Skills Demonstrated

### 14.1 Data Visualization:

Expertise in creating clear, insightful visualizations with Power BI.

### 14.2 Power Query Proficiency:

Data cleaning, transformation, and preparation for analysis.

### 14.3 Data Modeling:

Designing relationships and cardinalities between data tables.

### 14.4 Dashboard Design:

Developing user-friendly, interactive dashboards with slicers and filters.

### 14.5 DAX Formulas:

Writing custom DAX queries for calculated fields and measures.

### 14.6 Chart Customization:

Formatting and designing charts for readability and aesthetic appeal.

### 14.7 Analytical Thinking:

Interpreting data trends and presenting actionable insights.

### 14.8 Attention to Detail:

Ensured consistency in design and formatting across all dashboard elements.