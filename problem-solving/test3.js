const playerList = [
    {
        enrollmentId: 1,
        marks: 65,
        caste: 'General',
    },
    {
        enrollmentId: 2,
        marks: 70,
        caste: 'OBC',
    },
    {
        enrollmentId: 3,
        marks: 65,
        caste: 'SC/ST',
    },
    {
        enrollmentId: 4,
        marks: 50,
        caste: 'OBC',
    },
    {
        enrollmentId: 5,
        marks: 79,
        caste: 'General',
    },
    {
        enrollmentId: 6,
        marks: 82,
        caste: 'General',
    },
    {
        enrollmentId: 7,
        marks: 73,
        caste: 'General',
    },
    {
        enrollmentId: 8,
        marks: 77,
        caste: 'General',
    },
    {
        enrollmentId: 9,
        marks: 52,
        caste: 'SC/ST',
    },
    {
        enrollmentId: 10,
        marks: 61,
        caste: 'OBC',
    },
    {
        enrollmentId: 11,
        marks: 69,
        caste: 'General',
    },
    {
        enrollmentId: 12,
        marks: 74,
        caste: 'General',
    },
    {
        enrollmentId: 13,
        marks: 68,
        caste: 'General',
    },
    {
        enrollmentId: 14,
        marks: 78,
        caste: 'General',
    },
    {
        enrollmentId: 15,
        marks: 48,
        caste: 'General',
    },
];

/**
 * Above list is SSC exam result. CUtoff mark is 75 or above
 * A general cadidate has no benefit, he has to score 75 or above to qualify the exam
 * A OBC candidate has 5 marks benefit. it means, 5 extra marks will be awarded to him
 * A SC/ST candidate has 10 marks benefit, it means, 10 extra marks will be awarded to him
 */

// For example:- enrollmentId: 2 is OBC and has scored 70 marks. He will be awarded 5 extra marks
// so his total becomes 75 and he/she also qualify exam.


// Que- 1:- Find all qualified candidates (Do not apply any benefit)

// Que- 2:- Find all qualified candidates (apply OBC and SC/ST benefits)

// Que- 3:- Find all OBC candidates who have qualified exam becasue of benefit given.

// Que- 4:- Find all SC/ST candidates who have qualified exam becasue of benefit given.

// Que- 5:- Find all OBC candidates who have qualified exam without benefit.

// Que- 6:- Find all SC/ST candidates who have qualified exam without benefit.

// Que- 7:- Find all OBC & SC/ST candidates who have qualified exam becasue of benefit given.

// Que- 8:- Find all OBC & SC/ST candidates who have qualified exam without benefit.

// Que- 9:- Find total no of students who have cleared exam (apply benefit).
 
