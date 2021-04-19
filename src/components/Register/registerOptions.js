export const registerOptions = {
        fname: { required: "First name is required" },
        lname: { required: "Last name is required" },
        email: { required: "Email is required" },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters containing atleast 1 uppercase, 1 lowercase, 1 number and 1 special character"
      }

    },
    jobtitle:{ required: "Job Title is required"},
    company:{ required: "Company name is required"},
    employees: {required: "Number of employees is required"},
    country: {required: "Country is required"},
    industry:{required: "Industry is required"}
    };