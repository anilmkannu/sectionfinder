/**
 * Created by root on 08/12/2020.
 */
module.exports = {
  UserController: {
    userJSON: {
      login: {
        type: "object",
        properties: {
          email: {
            errExplain: "Email is required",
            type: "string",
            minLength: 5,
            maxLength: 35,
            required: true,
          },
          password: {
            errExplain: "Password is required",
            type: "string",
            minLength: 1,
            maxLength: 35,
            required: true,
          },
        },
      },
      creatAdmin: {
        type: "object",
        properties: {
          firstName: {
            errExplain: "First Name is required",
            type: "string",
            minLength: 2,
            maxLength: 30,
            required: true,
          },
          lastName: {
            errExplain: "First Name is required",
            type: "string",
            minLength: 2,
            maxLength: 30,
            required: true,
          },
          email: {
            errExplain: "Last Name is required",
            type: "string",
            minLength: 2,
            maxLength: 30,
            required: true,
          },
          password: {
            errExplain: "password is required",
            type: "string",
            minLength: 2,
            maxLength: 30,
            required: true,
          },
          startDate: {
            errExplain: "Start Date is required",
            type: "string",
            minLength: 8,
            maxLength: 10,
            required: true,
          },
          endDate: {
            errExplain: "End Date is required",
            type: "string",
            minLength: 8,
            maxLength: 10,
            required: true,
          },
          project: {
            errExplain: "Project is required",
            type: "string",
            minLength: 2,
            maxLength: 100,
            required: true,
          },
        },
      },
      signUp: {
        type: "object",
        properties: {
          firstName: {
            errExplain: "First Name is required",
            type: "string",
            minLength: 2,
            maxLength: 30,
            required: true,
          },
          lastName: {
            errExplain: "First Name is required",
            type: "string",
            minLength: 2,
            maxLength: 30,
            required: true,
          },
          email: {
            errExplain: "Last Name is required",
            type: "string",
            minLength: 2,
            maxLength: 30,
            required: true,
          },
          password: {
            errExplain: "password is required",
            type: "string",
            minLength: 2,
            maxLength: 30,
            required: true,
          },
          startDate: {
            errExplain: "Start Date is required",
            type: "string",
            minLength: 8,
            maxLength: 10,
            required: true,
          },
          endDate: {
            errExplain: "End Date is required",
            type: "string",
            minLength: 8,
            maxLength: 10,
            required: true,
          },
        },
      },
    },
  },

  SrcElementController: {
    SrcElememtJSON: {
      creatSrcElement: {
        type: "object",
        properties: {
          categoryName: {
            errExplain: "Category Name is required",
            type: "object",
            minLength: 2,
            maxLength: 30,
            required: true,
          },
          url: {
            errExplain: "Url is required",
            type: "string",
            minLength: 2,
            maxLength: 30,
            required: true,
          },
          websiteName: { type: "string" },
        },
      },
    },
  },
};
