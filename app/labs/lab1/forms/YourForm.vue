<template>
  <div id="wd-your-form">
    <h4>Student Profile</h4>

    <label htmlFor="wd-your-form-first-name">First name: </label>
    <input type="text" placeholder="Carter" id="wd-your-form-first-name" />
    <br />
    <label htmlFor="wd-your-form-last-name">Last name: </label>
    <input type="text" placeholder="Anderson" id="wd-your-form-last-name" />
    <br />
    <label htmlFor="wd-your-form-password">Password: </label>
    <input type="password" defaultValue="Sample123!" id="wd-your-form-password" />
    <br />

    <label htmlFor="wd-your-form-bio">Biography: </label>
    <br />
    <textarea id="wd-your-form-bio" cols="30" rows="5" defaultValue="I'm taking this course to learn proper web dev techniques and to get more experience working on teams" />
    <br />

    <label>Class standing:</label>
    <br />
    <input type="radio" name="radio-standing" id="wd-your-form-standing-freshman" />
    <label htmlFor="wd-your-form-standing-freshman">Freshman</label>
    <br />
    <input type="radio" name="radio-standing" id="wd-your-form-standing-sophomore" />
    <label htmlFor="wd-your-form-standing-sophomore">Sophomore</label>
    <br />
    <input type="radio" name="radio-standing" id="wd-your-form-standing-junior" />
    <label htmlFor="wd-your-form-standing-junior">Junior</label>
    <br />
    <input type="radio" name="radio-standing" id="wd-your-form-standing-senior" checked />
    <label htmlFor="wd-your-form-standing-senior">Senior</label>
    <br />

    <label>Enrollment status:</label>
    <br />
    <input type="radio" name="radio-enrollment" id="wd-your-form-enrollment-full-time" checked />
    <label htmlFor="wd-your-form-enrollment-full-time">Full-time</label>
    <br />
    <input type="radio" name="radio-enrollment" id="wd-your-form-enrollment-part-time" />
    <label htmlFor="wd-your-form-enrollment-part-time">Part-time</label>
    <br />

    <label>Interests:</label>
    <br />
    <input type="checkbox" name="check-interests" id="wd-your-form-interest-1" checked />
    <label htmlFor="wd-your-form-interest-1">Web Development</label>
    <br />
    <input type="checkbox" name="check-interests" id="wd-your-form-interest-2" />
    <label htmlFor="wd-your-form-interest-2">Artificial Intelligence</label>
    <br />
    <input type="checkbox" name="check-interests" id="wd-your-form-interest-3" />
    <label htmlFor="wd-your-form-interest-3">Cybersecurity</label>
    <br />
    <input type="checkbox" name="check-interests" id="wd-your-form-interest-4" checked />
    <label htmlFor="wd-your-form-interest-4">UI/UX Design</label>
    <br />

    <label htmlFor="wd-your-form-major">Major: </label>
    <br />
    <select id="wd-your-form-major" defaultValue="CS">
      <option value="CS">Computer Science</option>
      <option value="DS">Data Science</option>
      <option value="CYBER">Cybersecurity</option>
      <option value="ENG">Computer Engineering</option>
    </select>
    <br />

    <label htmlFor="wd-your-form-electives">Electives: </label>
    <br />
    <select multiple id="wd-your-form-electives">
      <option value="WEBDEV" selected>Web Development</option>
      <option value="ML">Machine Learning</option>
      <option value="DBASE" selected>Databases</option>
      <option value="NETWORK">Networking</option>
    </select>
    <br />

    <label htmlFor="wd-your-form-email">Email: </label>
    <input type="email" placeholder="anderson.cart@northeastern.edu" id="wd-your-form-email" />
    <br />

    <label htmlFor="wd-your-form-grad-year">Graduation year: </label>
    <input type="number" defaultValue="2027" min="2026" max="2030" id="wd-your-form-grad-year" />
    <br />

    <label htmlFor="wd-your-form-dob">Date of birth: </label>
    <input type="date" defaultValue="2004-09-03" min="1990-01-01" max="2010-12-31" id="wd-your-form-dob" />
    <br />

    <label htmlFor="wd-your-form-excited">How excited are you for this course? (0-10): </label>
    <input type="range" defaultValue="9" min="0" max="10" id="wd-your-form-excited" />
    <br />

    <button id="wd-your-form-save" type="submit">Save</button>
    <button id="wd-your-form-cancel" type="button">Cancel</button>
  </div>
</template>
