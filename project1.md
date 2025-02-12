---
layout: page
title: "Compsee"
permalink: /project1
---

# <a href="https://github.com/m-hassantahir/Sales-Data-Analysis"> Sales Tracking Dashboard for Compsee Ecommerce using Microsoft Power BI</a>

1. Importing the Compsee Ecommerce Data

The project data consisted of two CSV files:

Orders Table: Contained customer and order details.

Order Details Table: Included payment modes, amounts, and product information.



I used the Get Data feature to import these tables into Power BI. Each table appeared in the "Fields" pane, making it easy to work with the data.

2. Data Cleaning and Transformation in Power Query

Before analysis, I cleaned the data using Power Query:

I changed data types (e.g., text to date for the order date).

Removed unnecessary columns to streamline the dataset.

Split columns for better organization.

Removed duplicates to ensure clean data.

I also created a custom column by dividing "Amount" by "Quantity" to Average of Sales (AOV). 



Additionally, I used the Group By feature to aggregate data, such as summing up sales by category.

Once transformations were complete, I clicked Close & Apply to load the cleaned data into the model.

3. Building Relationships Between Tables

In the Model View, I established relationships between the Orders and Order Details tables:

I linked the Order ID column from both tables to create a relationship.

I defined the cardinality as One-to-Many since one order ID could have multiple details.

I ensured the relationship was active for seamless data analysis.

This setup allowed me to generate accurate visualizations by combining data from both tables.



4. Creating the Dashboard

To design the dashboard, I followed these steps:

Adding a Dashboard Heading

I inserted a Text Box and typed "Compsee E-commerce Sales" as the heading.

I formatted the text by centering it, making it bold, and resizing the text box for a professional look.

Designing the "Profit by Month" Chart

Adding the Chart:

I selected a Column Chart from the visualization pane.

I dragged the "Order Date" field to the X-axis and the "Profit" field to the Values section.

Fixing Data Issues:

The date column was initially set to text. I changed its format to "Date" in the Data View, which resolved display issues.

I expanded the date to show months (e.g., January, February).

Formatting the Chart:

I removed gridlines and adjusted axis titles for clarity.

I set a background color and increased transparency for visual appeal.

I changed the column colors and applied conditional formatting to differentiate high and low profits using red and green shades.

Adjusting Dimensions:

I manually resized the chart and added a border with rounded corners for a sleek appearance.

Adding a Title:

I named the chart "Profit by Month" and aligned the title to the center.

I formatted the title to match the dashboard's color scheme.

Adding Conditional Formatting

I applied conditional formatting to the columns so that positive values were blue and negative values were red, making it easy to interpret the data at a glance.



5. Customizing the Dashboard

I further refined the dashboard by:

Adding a canvas background image that complemented the theme.

Formatting text, adjusting transparency, and ensuring a cohesive layout.

Refreshing the data to reflect any updates made during the project.

6. Sum of Profit by Sub-Category

Adding a Sub-Category Level Chart

Created a Stacked Bar Chart:

Set "Sub-Category" as the X-axis.

Added "Profit" as the value to visualize contributions by sub-category.

Resized the chart for clarity.

Applied Filters for Top Categories:

Enabled a Top N Filter to display the top 5 sub-categories based on profit.

Sorted by profit to highlight top contributors.

Used the Format Painter:

Copied formatting from other charts for consistent styling.

Final Adjustments:

Changed column colors and increased value text size for better readability.



7. Sum of Quantity by Category

Creating and Formatting a Pie Chart

Designed a Pie Chart:

Added "Category" to the Legend field and "Quantity" to Values.

Used the Format Painter for consistency with other visuals.

Customized the Chart:

Adjusted slice colors and spacing for a clean look.

Increased text size and removed unnecessary decimal places.

Disabled legends and headers for simplicity.





Creating a Pie Chart for Payment Mode

Duplicated the existing pie chart.

Replaced "Category" with "Payment Mode" to visualize payment distributions.

Resized and formatted the new chart for readability.



8. Creating Cards

Key Metrics

Created Cards for metrics like Total Amount, Quantity, and Profit:

Used the Card Visualization and added relevant fields.

Applied the Format Painter for consistent styling.

Created a Metric for Average Order Value:

Added a new column: Average Order Value = Amount / Quantity.

Displayed this metric using a card visualization.



Layout Adjustments

Ensured all cards were of the same size and aligned for a balanced layout.

9. Creating and Formatting Additional Charts

Top Performing Metrics

Designed a Bar Chart for Top N statuses:

Added "Status" and "Amount" fields.

Applied a Top N filter to show the top 5 statuses.

Adjusted axis and label formatting.

Chart for Top Customers:

Used a Stacked Bar Chart for "Customer Name" and "Amount."

Applied a Top N filter to highlight top spenders.

Used the Format Painter for styling consistency.



10. Adding Slicers

Quarter Filter

Added a Slicer for "Quarter": 

Changed the style to a drop-down format.

Used the Format Painter for consistency.

State-Based Filter

Added a slicer for "State" to filter data by region.

Customized the layout and formatting for cohesion.



11. Final Adjustments and Testing

Ensured alignment and consistent sizing of all elements.

Verified interactivity of filters, ensuring slicers updated the dashboard dynamically.

Refined formatting, including colors, labels, and font sizes for better readability.



Final Outcome

The final dashboard provided a comprehensive view of Compsee Ecommerce 's sales performance, including:

Key metrics displayed via cards.

Insightful visualizations like column charts, pie charts, and bar charts.

Filters for quarters and states for enhanced interactivity.

A polished, professional layout with cohesive styling.

FEATURES OF THE PROJECT

Comprehensive Data Visualization:

Developed interactive dashboards with Power BI for sales tracking and business insights.

Included multiple chart types (column, bar, pie, stacked bar charts) tailored to the client's needs.

Dynamic and Interactive Filters:

Added slicers for filters based on states, quarters, and categories for easy data exploration.

Created interactive visuals that dynamically respond to user inputs.

Data Modeling and Relationships:

Managed and visualized relationships between multiple tables in Model View.

Defined and optimized cardinalities for better data integration.

Custom Metrics and Calculations:

Created calculated columns (e.g., Average Order Value) and custom aggregations (e.g., total sales, profit).

Added conditional formatting for enhanced readability and insights.

Enhanced User Interface Design:

Applied consistent formatting and styling across all visual elements.

Incorporated tools like Format Painter to maintain design uniformity.

Advanced Data Transformation:

Used Power Query to clean, manipulate, and transform raw data into a usable format.

Grouped data and created custom columns for detailed analysis.

SKILLS DEMONSTRATED

Data Visualization: Expertise in creating clear, insightful visualizations with Power BI.

Power Query Proficiency: Data cleaning, transformation, and preparation for analysis.

Data Modeling: Designing relationships and cardinalities between data tables.

Dashboard Design: Developing user-friendly, interactive dashboards with slicers and filters.

DAX Formulas: Writing custom DAX queries for calculated fields and measures.

Chart Customization: Formatting and designing charts for readability and aesthetic appeal.

Analytical Thinking: Interpreting data trends and presenting actionable insights.

Attention to Detail: Ensured consistency in design and formatting across all dashboard elements.



