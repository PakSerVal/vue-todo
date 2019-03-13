/**
 * Какой-нить апи.
 */
export default class ApiService {
	/**
	 * Конструктор.
	 */
	constructor() {
		this.list      = [];
		this.increment = 0;
	}
	
	/**
	 * Инициализация сервиса.
	 */
	init() {
		this.list = [
			{
				id: 1,
				title: 'Изучить React',
				isCompleted: true,
			},
			{
				id: 2,
				title: 'Изучить Vue',
				isCompleted: false,
			},
		];
		this.increment = 2;
	}

	/**
	 * Получение списка.
	 */
	getList() {
		return this.list;
	}

	/**
	 * Добавление дела.
	 *
	 * @param {string} title
	 */
	addItem(title) {
		const todo = {};
		todo.id          = ++this.increment;
		todo.title       = title;
		todo.isCompleted = false;

		this.list.push(todo);
	}

	/**
	 * Удаление дела.
	 *
	 * @param id
	 */
	removeItem(id) {
		this.list = this.list.filter((item) => {return item.id !== id})
	}

	/**
	 * Пометить дело, как завершенное.
	 *
	 * @param id
	 */
	completeItem(id) {
		this.list = this.list.map((item) => {
			if (item.id === id) {
				item.isCompleted = !item.isCompleted;
			}

			return item;
		});
	}
}
