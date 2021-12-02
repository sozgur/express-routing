const express = require("express");
const ExpressError = require("./expressError");
const { mean, median, mode, convertToNumber } = require("./helper");
const app = express();

app.use(express.json());

app.get("/mean", function (req, res) {
    if (!req.query.nums) {
        throw new ExpressError("Nums are required", 400);
    }
    const elements = req.query["nums"].split(",");

    let numbers = convertToNumber(elements);
    if (numbers instanceof Error) {
        throw new ExpressError(numbers.message, 400);
    }

    let response = {};

    try {
        response.value = mean(numbers);
        response.operation = "mean";
    } catch (e) {
        throw new ExpressError("Can't calculate mean", 400);
    }

    return res.send({ response });
});

app.get("/median", function (req, res) {
    if (!req.query.nums) {
        throw new ExpressError("Nums are required", 400);
    }
    const elements = req.query["nums"].split(",");

    let numbers = convertToNumber(elements);
    if (numbers instanceof Error) {
        throw new ExpressError(numbers.message, 400);
    }

    let response = {};

    try {
        response.value = median(numbers);
        response.operation = "median";
    } catch (e) {
        throw new ExpressError("Can't calculate median", 400);
    }

    return res.send({ response });
});

app.get("/mode", function (req, res) {
    if (!req.query.nums) {
        throw new ExpressError("Nums are required", 400);
    }
    const elements = req.query["nums"].split(",");

    let numbers = convertToNumber(elements);
    if (numbers instanceof Error) {
        throw new ExpressError(numbers.message, 400);
    }

    let response = {};

    try {
        response.value = mode(numbers);
        response.operation = "mode";
    } catch (e) {
        throw new ExpressError("Can't calculate mode", 400);
    }

    return res.send({ response });
});

app.get("/all", function (req, res) {
    if (!req.query.nums) {
        throw new ExpressError("Nums are required", 400);
    }
    const elements = req.query["nums"].split(",");

    let numbers = convertToNumber(elements);
    if (numbers instanceof Error) {
        throw new ExpressError(numbers.message, 400);
    }

    let response = {};

    try {
        response.mean = mean(numbers);
        response.median = median(numbers);
        response.mode = mode(numbers);
        response.operation = "all";
    } catch (e) {
        throw new ExpressError("Can't calculate", 400);
    }

    return res.send({ response });
});

// If no other route matches, respond with a 404
app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404);
    next(e);
});

// Error handler
app.use(function (err, req, res, next) {
    //Note the 4 parameters!
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.msg;

    // set the status and alert the user
    return res.status(status).json({
        error: { message, status },
    });
});

/** Start server on port 3000 */

app.listen(3000, function () {
    console.log("Server started on port 3000.");
});
