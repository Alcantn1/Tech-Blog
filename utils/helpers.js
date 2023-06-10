module.exports = {
    // Format the date
    formatDate: (date) => {
      return new Date(date).toLocaleDateString();
    },
  
    // Format the time
    formatTime: (date) => {
      return new Date(date).toLocaleTimeString();
    },
  
    // Truncate the text
    truncateText: (text, length) => {
      if (text.length > length) {
        return text.substring(0, length) + '...';
      }
      return text;
    },
  
    // Check if two values are equal
    isEqual: (value1, value2) => {
      return value1 === value2;
    }
  };
  