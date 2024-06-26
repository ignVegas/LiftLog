# [Lift Log](https://www.vegasmantsch.com/liftlog/log/) - LIVE DEMO

Lift Log is a simple web application designed to help users track their weightlifting exercises and sets. Users can select exercises, add sets with weight and reps, and export their workout data to a text file.

## Features

- **Select Exercises**: Choose from a predefined list of exercises.
- **Add Sets**: For each exercise, add sets specifying the weight and reps.
- **Export Data**: Export the workout data to a text file.
- **Responsive Design**: Mobile-friendly and easy to use.

## Usage

### Choosing an Exercise

1. Click on the "Choose an exercise" button.
2. A modal will appear with a list of predefined exercises.
3. Select an exercise from the list.

### Adding Sets

1. For each exercise card, click the "Add Set" button.
2. Two input fields will appear for weight and reps.
3. Enter the values for weight and reps.
4. Repeat as needed to add multiple sets.

### Exporting Data

1. Once all exercises and sets are added, click the "Let's Log!" button.
2. A text file containing the workout data will be generated and downloaded.
3. Opening it would show defined data on that workouts progress.

## Development
## HTML Structure
The main structure of the application is defined in 'index.html':

- Header with logo
- Dropdown for exercise selection
- Section for exercise cards
- Button to export data
  
##CSS Styling
### Styling is handled in styles.css, including:

- Modal styling
- Blur effect
- Exercise buttons
- Card layout and styling
- Input field styling
  
## JavaScript Functionality
### JavaScript functions handle the interactive aspects:

- Opening and closing the modal
- Adding exercises and sets
- Exporting data to a text file
