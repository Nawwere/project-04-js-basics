// ПЗ №4. Дополните код.
const studentName = 'Васин Мирослав';
const courseName = 'Основы веб-разработки';
let completedTasks = 10;
const totalTasks = 10;

const remainingTasks = totalTasks - completedTasks;

const rawProgress = (completedTasks / totalTasks) * 100;
const progress = Math.round(rawProgress);

const hoursSpent = 2;
const averageHoursPerTask = hoursSpent / completedTasks;

console.log(`Студент: ${studentName}`);
console.log(`Курс: ${courseName}`);
console.log(`Оставшиеся задания: ${remainingTasks}`);
console.log(`Прогресс выполнения: ${progress}%`);
console.log(`Среднее время на одно задание: ${averageHoursPerTask.toFixed(2)} ч.`);

if (completedTasks === totalTasks) {
    console.log('Спринт завершён');
} else {
    console.log('Продолжайте работу');
}

// (Самостоятельная часть: дополнительное условие при прогрессе 80% и выше)
if (progress >= 80) {
    console.log('Финиш близко');
}
