function calculateAge() {
  const dobInput = document.getElementById('dob').value;
  if (!dobInput) {
    document.getElementById('ageResult').textContent = "Please select your date of birth";
    return;
  }
  const dob = new Date(dobInput);
  const today = new Date();

  if (dob > today) {
    document.getElementById('ageResult').textContent = "Date of birth can't be in the future";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById('ageResult').textContent = `${years} years, ${months} months, ${days} days`;
}
