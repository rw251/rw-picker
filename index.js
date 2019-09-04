const hasEventListener = window.addEventListener;
const weeks = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getShortMonth(month) {
  return months[parseInt(month, 10) - 1];
}

function getMonthNumber(month) {
  const formatted = month.charAt(0).toUpperCase() + month.substr(1, month.length - 1).toLowerCase();
  return months.indexOf(formatted);
}

// Check if current year is leap year
function isLeapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

function getDaysInMonth(year, month) {
  return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}

function getWeekDay(date, month, year) {
  return new Date(year, month, date).getDay();
}

// Date formatter
function format(instance, d, m, year) {
  const day = d < 10 ? `0${d}` : d;
  const month = m < 10 ? `0${m}` : m;
  switch (instance.options.dateFormat) {
    case 'dd-MM-yyyy':
      return `${day}-${month}-${year}`;
    case 'dd-MMM-yyyy':
      return `${day}-${getShortMonth(parseInt(month, 10))}-${year}`;
    case 'dd.MM.yyyy':
      return `${day}.${month}.${year}`;
    case 'dd.MMM.yyyy':
      return `${day}.${getShortMonth(parseInt(month, 10))}.${year}`;
    case 'dd/MM/yyyy':
      return `${day}/${month}/${year}`;
    case 'dd/MMM/yyyy':
      return `${day}/${getShortMonth(parseInt(month, 10))}/${year}`;
    case 'MM-dd-yyyy':
      return `${month}-${day}-${year}`;
    case 'MM.dd.yyyy':
      return `${month}.${day}.${year}`;
    case 'MM/dd/yyyy':
      return `${month}/${day}/${year}`;
    case 'yyyy-MM-dd':
      return `${year}-${month}-${day}`;
    case 'yyyy-MMM-dd':
      return `${year}-${getShortMonth(parseInt(month, 10))}-${day}`;
    case 'yyyy.MM.dd':
      return `${year}.${month}.${day}`;
    case 'yyyy.MMM.dd':
      return `${year}.${getShortMonth(parseInt(month, 10))}.${day}`;
    case 'yyyy/MM/dd':
      return `${year}/${month}/${day}`;
    case 'yyyy/MMM/dd':
      return `${year}/${getShortMonth(parseInt(month, 10))}/${day}`;
    default:
      return `${day}-${getShortMonth(parseInt(month, 10))}-${year}`;
  }
}

// Date parser
function parse(instance, value) {
  let date; let
    dateArray;
  switch (instance.options.dateFormat) {
    case 'dd-MM-yyyy':
      dateArray = value.split('-');
      date = new Date(
        parseInt(dateArray[2], 10),
        parseInt(dateArray[1], 10) - 1,
        parseInt(dateArray[0], 10)
      );
      return date;
    case 'dd-MMM-yyyy':
      dateArray = value.split('-');
      date = new Date(
        parseInt(dateArray[2], 10),
        getMonthNumber(dateArray[1]), parseInt(dateArray[0], 10)
      );
      return date;
    case 'dd.MM.yyyy':
      dateArray = value.split('.');
      date = new Date(
        parseInt(dateArray[2], 10),
        parseInt(dateArray[1], 10) - 1,
        parseInt(dateArray[0], 10)
      );
      return date;
    case 'dd.MMM.yyyy':
      dateArray = value.split('.');
      date = new Date(
        parseInt(dateArray[2], 10),
        getMonthNumber(dateArray[1]), parseInt(dateArray[0], 10)
      );
      return date;
    case 'dd/MM/yyyy':
      dateArray = value.split('/');
      date = new Date(
        parseInt(dateArray[2], 10),
        parseInt(dateArray[1], 10) - 1,
        parseInt(dateArray[0], 10)
      );
      return date;
    case 'dd/MMM/yyyy':
      dateArray = value.split('/');
      date = new Date(
        parseInt(dateArray[2], 10),
        getMonthNumber(dateArray[1]), parseInt(dateArray[0], 10)
      );
      return date;
    case 'MM-dd-yyyy':
      dateArray = value.split('-');
      date = new Date(
        parseInt(dateArray[2], 10),
        parseInt(dateArray[0], 10) - 1,
        parseInt(dateArray[1], 10)
      );
      return date;
    case 'MM.dd.yyyy':
      dateArray = value.split('.');
      date = new Date(
        parseInt(dateArray[2], 10),
        parseInt(dateArray[0], 10) - 1,
        parseInt(dateArray[1], 10)
      );
      return date;
    case 'MM/dd/yyyy':
      dateArray = value.split('/');
      date = new Date(
        parseInt(dateArray[2], 10),
        parseInt(dateArray[0], 10) - 1,
        parseInt(dateArray[1], 10)
      );
      return date;
    case 'yyyy-MM-dd':
      dateArray = value.split('-');
      date = new Date(
        parseInt(dateArray[0], 10),
        parseInt(dateArray[1], 10) - 1,
        parseInt(dateArray[2], 10)
      );
      return date;
    case 'yyyy-MMM-dd':
      dateArray = value.split('-');
      date = new Date(
        parseInt(dateArray[0], 10),
        getMonthNumber(dateArray[1]), parseInt(dateArray[2], 10)
      );
      return date;
    case 'yyyy.MM.dd':
      dateArray = value.split('.');
      date = new Date(
        parseInt(dateArray[0], 10),
        parseInt(dateArray[1], 10) - 1,
        parseInt(dateArray[2], 10)
      );
      return date;
    case 'yyyy.MMM.dd':
      dateArray = value.split('.');
      date = new Date(
        parseInt(dateArray[0], 10),
        getMonthNumber(dateArray[1]), parseInt(dateArray[2], 10)
      );
      return date;
    case 'yyyy/MM/dd':
      dateArray = value.split('/');
      date = new Date(
        parseInt(dateArray[0], 10),
        parseInt(dateArray[1], 10) - 1,
        parseInt(dateArray[2], 10)
      );
      return date;
    case 'yyyy/MMM/dd':
      dateArray = value.split('/');
      date = new Date(
        parseInt(dateArray[0], 10),
        getMonthNumber(dateArray[1]), parseInt(dateArray[2], 10)
      );
      return date;
    default:
      dateArray = value.split('-');
      date = new Date(
        parseInt(dateArray[2], 10),
        getMonthNumber(dateArray[1]), parseInt(dateArray[0], 10)
      );
      return date;
  }
}

// Extend default options
function extendOptions(defaults, options) {
  options.keys.forEach((key) => {
    defaults[key] = options[key];
  });
  return defaults;
}

// Function to add events
function addEvent(el, type, callback, capture) {
  if (hasEventListener) {
    if (el) {
      el.addEventListener(type, callback, capture);
    }
  } else if (el) {
    el.attachEvent(`on${type}`, callback);
  }
}

// Function to remove events
function removeEvent(el, type, callback, capture) {
  if (hasEventListener) {
    if (el) {
      el.removeEventListener(type, callback, capture);
    }
  } else if (el) {
    el.detachEvent(`on${type}`, callback);
  }
}

// Build Calendar
const Calendar = {
  // Get current date
  date: new Date(),

  // Get day of the week
  day() {
    return this.date.getDay();
  },

  // Get today day
  today() {
    return this.date.getDate();
  },

  // Get current month
  month() {
    return this.date.getMonth();
  },

  // Get current year
  year() {
    return this.date.getFullYear();
  },

  getCurrentYear() {
    return new Date().getFullYear();
  },

  rowPadding() {
    const startWeekDay = getWeekDay(1, this.month(), this.year());
    return [6, 0, 1, 2, 3, 4, 5][startWeekDay];
  },

  // Build calendar header
  buildHeader() {
    return `${'<div class="foopicker__header">'
      + '<div class="foopicker__arrow foopicker__arrow--prev"></div>'
      + '<div class="foopicker__date">'}${this.buildMonths()
    }&nbsp;&nbsp;${this.buildYears()}</div>`
      + '<div class="foopicker__arrow foopicker__arrow--next"></div></div>';
  },

  // Build months select
  buildMonths() {
    let elem = '<select class="foopicker__date--month">'; const
      month = this.month();
    for (let i = 0; i < months.length; i += 1) {
      elem += `<option value="${i}"`;
      if (i === month) {
        elem += ' selected';
      }
      elem += `>${months[i]}</option>`;
    }
    elem += '</select>';
    return elem;
  },

  // Build years select
  buildYears() {
    let elem = '<select class="foopicker__date--year">'; const
      currentYear = this.getCurrentYear();
    const year = this.year();
    for (let i = year - 20; i <= currentYear + 5; i += 1) {
      elem += `<option value="${i}"`;
      if (i === year) {
        elem += ' selected';
      }
      elem += `>${i}</option>`;
    }
    elem += '</select>';
    return elem;
  },

  // Build calendar body
  buildCalendar() {
    let index;
    const daysInMonth = getDaysInMonth(this.year(), this.month());
    let template = '<div class="foopicker__calendar"><table><tr>';
    for (index = 0; index < weeks.length; index += 1) {
      template += `<td><div class="foopicker__week">${weeks[index]}</div></td>`;
    }
    template += '</tr><tr>';
    let columnIndex = 0; let
      dayClass = '';
    let day = 0 - this.rowPadding();
    for (; day < daysInMonth; day += 1) {
      if (day < 0) {
        template += '<td></td>';
      } else {
        dayClass = day === (this.today() - 1) ? 'foopicker__day--today' : '';
        template += `<td><div class="foopicker__day ${dayClass}" `;
        template += `data-day="${day + 1}" data-month="${this.month() + 1}`;
        template += `" data-year="${this.year()}" `;
        template += `>${day + 1}</div></td>`;
      }
      columnIndex += 1;
      if (columnIndex % 7 === 0) {
        columnIndex = 0;
        template += '</tr><tr>';
      }
    }
    template += '</tr></table></div>';
    return template;
  },

  // Header click listeners
  addListeners(instance) {
    const { id } = instance.options;
    const pickerDiv = document.getElementById(`foopicker-${id}`);
    if (pickerDiv) {
      const prevBtn = pickerDiv.getElementsByClassName('foopicker__arrow--prev')[0];
      const nextBtn = pickerDiv.getElementsByClassName('foopicker__arrow--next')[0];
      addEvent(prevBtn, 'click', instance.changeMonth, false);
      addEvent(nextBtn, 'click', instance.changeMonth, false);

      const monthSelect = pickerDiv.getElementsByClassName('foopicker__date--month')[0];
      const yearSelect = pickerDiv.getElementsByClassName('foopicker__date--year')[0];

      // add event listener for month change
      addEvent(monthSelect, 'change', this.handleMonthChange.bind(event, instance), false);

      // add event listener for year change
      addEvent(yearSelect, 'change', this.handleYearChange.bind(event, instance), false);
    }

    this.changeInstanceDate(instance);
    this.modifyDateClass(instance);

    const el = pickerDiv.getElementsByClassName('foopicker__day');
    if (el && el.length) {
      for (let count = 0; count < el.length; count += 1) {
        if (typeof el[count].onclick !== 'function') {
          if (el[count].className && el[count].className.indexOf('foopicker__day--disabled') === -1) {
            const elem = document.getElementById(`${id}-foopicker__day--${count + 1}`);
            addEvent(elem, 'click', instance.selectDate, false);
          }
        }
      }
    }
  },

  handleMonthChange(instance, event) {
    instance.updateCalendar(event.target.value);
  },

  handleYearChange(instance, event) {
    instance.updateCalendar(instance.currentMonth, event.target.value);
  },

  removeListeners(instance) {
    const { id } = instance.options;
    const pickerDiv = document.getElementById(`foopicker-${id}`);
    if (pickerDiv) {
      const monthSelect = pickerDiv.getElementsByClassName('foopicker__date--month')[0];
      const yearSelect = pickerDiv.getElementsByClassName('foopicker__date--year')[0];

      monthSelect.removeEventListener('change', this.handleMonthChange, false);
      yearSelect.removeEventListener('change', this.handleYearChange, false);
    }
  },

  modifyDateClass(instance) {
    const { id } = instance.options; const day = instance.selectedDay; let currentDate; let
      disabled;
    const date = new Date();
    const month = date.getMonth(); const year = date.getFullYear(); let
      dayClass;
    const pickerDiv = document.getElementById(`foopicker-${id}`);
    if (pickerDiv) {
      const el = pickerDiv.getElementsByClassName('foopicker__day');
      if (el && el.length) {
        for (let count = 0; count < el.length; count += 1) {
          disabled = '';
          currentDate = format(instance, el[count].dataset.day, el[count].dataset.month,
            el[count].dataset.year);
          if (instance.options.disable && instance.options.disable.indexOf(currentDate) !== -1) {
            disabled = 'foopicker__day--disabled';
          }

          el[count].className = 'foopicker__day';
          if ((count + 1) === day && this.month() === instance.selectedMonth - 1
            && this.year() === instance.selectedYear) {
            el[count].className += `${' foopicker__day--selected '}${disabled}`;
          } else {
            if (el[count].dataset.day === this.today()
              && month === this.month()
              && year === this.year()) {
              dayClass = ' foopicker__day--today';
            } else {
              dayClass = '';
            }
            el[count].className += `${dayClass} ${disabled}`;
          }

          if ((count + 1) === date.getDate() && this.month() === month && this.year() === year) {
            el[count].classList.add('foopicker__day--today');
          }
          el[count].id = `${id}-foopicker__day--${count + 1}`;
        }
      }
    }
  },

  // Change date in instance
  changeInstanceDate(instance) {
    instance.currentDay = this.day();
    instance.currentDate = this.today();
    instance.currentMonth = this.month();
    instance.currentYear = this.year();
  },
};

function addListeners(picker) {
  const el = document.getElementById(picker.options.id);
  if (el) {
    addEvent(el, 'click', picker.showPicker, false);
    addEvent(el, 'blur', picker.hidePicker, false);
  }
}

// Check if foopicker is already built and added to DOM
function hasPicker(el) {
  return !!(el && el.querySelector('.foopicker'));
}

exports.DatePicker = (options) => {
  let defaults = {
    className: 'foopicker',
    dateFormat: 'dd-MMM-yyyy',
    disable: [],
  };


  if (options && typeof options === 'object') {
    defaults = extendOptions(defaults, options);
  }

  return {

    defaults,

    // Show date picker on click
    showPicker() {
      this.buildPicker();
      const pickerField = document.getElementById(this.defaults.id);
      const pickerDiv = document.getElementById(`foopicker-${this.defaults.id}`);
      if (pickerField) {
        const datepicker = pickerField.getBoundingClientRect();
        const { left } = datepicker;
        const top = datepicker.bottom - 7;
        if (pickerDiv) {
          pickerDiv.style.position = 'fixed';
          pickerDiv.style.top = `${top}px`;
          pickerDiv.style.left = `${left}px`;
          pickerDiv.style.zIndex = '99999';
        }
      }
    },

    // Hide date picker
    hidePicker() {
      setTimeout(() => {
        let pickerDiv; let
          pickerField;
        if (!this.monthChange && !this.isPickerClicked) {
          this.removeListeners(this.defaults.id);
          pickerDiv = document.getElementById(`foopicker-${this.defaults.id}`);
          pickerDiv.removeEventListener('click', this.handlePickerClick, false);
          if (pickerDiv) {
            pickerDiv.innerHTML = '';
          }
          this.isDateClicked = false;
        } else if (!this.isPickerClicked) {
          pickerField = document.getElementById(this.options.id);
          if (pickerField) {
            pickerField.focus();
          }
          this.monthChange = false;
        }
      }, 210);
    },

    // Select date
    selectDate(event) {
      this.monthChange = false;
      const el = document.getElementById(event.target.id);
      const pickerField = document.getElementById(this.defaults.id);
      if (el) {
        el.classList.add('foopicker__day--selected');
        const date = format(this, el.dataset.day, el.dataset.month, el.dataset.year);
        this.selectedDate = date;
        this.selectedDay = parseInt(el.dataset.day, 10);
        this.selectedMonth = parseInt(el.dataset.month, 10);
        this.selectedYear = parseInt(el.dataset.year, 10);
        if (pickerField) {
          pickerField.value = date;
          pickerField.focus();
          setTimeout(() => {
            pickerField.blur();
          }, 100);
        }
      }
      this.isPickerClicked = false;
      this.isDateClicked = true;
      this.hidePicker();
    },

    keyDownListener() {
      this.monthChange = false;
      this.hidePicker();
    },

    removeListeners(id) {
      const picker = document.getElementById(id);
      if (picker) {
        const el = picker.getElementsByClassName('foopicker__day');
        if (el && el.length) {
          for (let count = 0; count < el.length; count += 1) {
            if (typeof el[count].onclick === 'function') {
              const elem = document.getElementById(`${id}-foopicker__day--${count + 1}`);
              removeEvent(elem, 'click', this.selectDate, false);
            }
          }
        }
      }
      document.removeEventListener('keydown', this.keyDownListener, false);

      const htmlRoot = document.getElementsByTagName('html')[0];
      htmlRoot.removeEventListener('click', this.handleDocumentClick, false);
    },

    changeMonth(event) {
      const { className } = event.target; let
        positive = false;
      if (className.indexOf('foopicker__arrow--next') !== -1) {
        positive = true;
      }
      const month = positive ? this.currentMonth + 1 : this.currentMonth - 1;
      this.updateCalendar(month);
    },

    updateCalendar(newMonth, newYear) {
      this.monthChange = true;
      const day = this.currentDate;
      const year = newYear || this.currentYear;
      this.currentMonth = newMonth;
      Calendar.date = new Date(year, newMonth, day);
      const pickerDiv = document.getElementById(`foopicker-${this.defaults.id}`);
      if (pickerDiv) {
        const datepicker = pickerDiv.querySelector('.foopicker');
        datepicker.innerHTML = Calendar.buildHeader() + Calendar.buildCalendar();
        this.isPickerClicked = false;
        Calendar.removeListeners(this);
        Calendar.addListeners(this);
      }
    },

    buildPicker() {
      const pickerDiv = document.getElementById(`foopicker-${this.defaults.id}`);
      const pickerField = document.getElementById(this.defaults.id);
      if (pickerDiv && !hasPicker(pickerDiv)) {
        const fragment = document.createDocumentFragment();
        const datepicker = document.createElement('div');
        // Add default class name
        datepicker.className = this.options.className;

        // Date is selected show that month calendar
        let date;
        if (pickerField && pickerField.value && pickerField.value.length >= 10) {
          date = parse(this, pickerField.value);
          this.selectedDay = date.getDate();
          this.selectedMonth = date.getMonth() + 1;
          this.selectedYear = date.getFullYear();
          this.selectedDate = format(this, date.getDate(), date.getMonth() + 1, date.getFullYear());
        } else {
          this.selectedDate = null;
          this.selectedDay = null;
          this.selectedMonth = null;
          this.selectedYear = null;
          date = new Date();
        }
        Calendar.date = date;

        // Add calendar to datepicker
        datepicker.innerHTML = Calendar.buildHeader() + Calendar.buildCalendar();
        // Append picker to fragment and add fragment to DOM
        fragment.appendChild(datepicker);
        pickerDiv.appendChild(fragment);

        Calendar.addListeners(this);

        // add event listener to handle clicks anywhere on date picker
        addEvent(pickerDiv, 'click', this.handlePickerClick, false);
      }
      document.addEventListener('keydown', this.keyDownListener, false);

      // Close the date picker if clicked anywhere outside the picker element
      const htmlRoot = document.getElementsByTagName('html')[0];
      addEvent(htmlRoot, 'click', this.handleDocumentClick, false);
    },

    handlePickerClick(event) {
      event.stopPropagation();
      if (!this.isDateClicked) {
        this.isPickerClicked = true;
      }
    },

    handleDocumentClick(event) {
      const pickerField = document.getElementById(this.options.id);
      const pickerDiv = document.getElementById(`foopicker-${this.options.id}`);
      this.isPickerClicked = false;
      this.monthChange = false;
      if (event.target !== pickerField && event.target !== pickerDiv) {
        this.hidePicker();
      }
    },

    buildTemplate() {
      const pickerDiv = document.createElement('div');
      pickerDiv.id = `foopicker-${this.defaults.id}`;
      document.body.appendChild(pickerDiv);
      addListeners(this);
    },

    destroy() {
      const pickerDiv = document.getElementById(`foopicker-${this.defaults.id}`);
      if (pickerDiv) {
        document.body.removeChild(pickerDiv);
      }
    },
  };
};