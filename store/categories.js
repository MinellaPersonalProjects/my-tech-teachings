// Utilities
import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('category', {
    state: () => ({
        categories: [
            {
                title: "Learn Vue",
                related_tags: ["vue"],
            },
            {
                title: "JavaScript Tips",
                related_tags: ["javascript"],
            },
            {
                title: "FullStack Development with Vue + Python",
                related_tags: ["vue", "python"]
            },
            {
                title: "Quick Start Tutorials",
                related_tags: ["quick start"]
            },
            {
                title: "General Advice",
                related_tags: ["general"]
            }
            // Add more categories here
        ],
    }),

    getters: {
        getAllCategories: () => {
            return this.categories;
        },

        getCategoryByTag: (tag) => {
            return this.categories.find((category) => category.related_tags.includes(tag));
        },

        //get items by multiple tags ( item must contain all tags )
        getItemsByTags: (tags) => {
            return this.categories.filter((item) => tags.every((tag) => item.related_tags.includes(tag)));
        },

        // get item by at least one of the tags
        getItemsByAnyTag: (tags) => {
            return this.categories.filter((item) => tags.some((tag) => item.related_tags.includes(tag)));
        },

        getCategoryByTitle: (title) => {
            return this.categories.find((category) => category.title === title);
        },

        // get all tags used
        getAllTags: () => {
            const allTags = this.categories.reduce((tags, item) => {
                return [...tags, ...item.related_tags];
            }, []);
            return [...new Set(allTags)]; // Remove duplicates
        },

        postsByCategory : (title, posts) => {
            const category = this.categories.find((category) => category.title === title);
            if (category) {
                return posts.filter((post) => category.related_tags.some((tag) => post.tags.includes(tag)));
            }
            return [];
        }
    },

    mutations: {
        addCategory: (category) => {
            this.categories.push(category);
        },
        removeCategory: (title) => {
            const index = this.categories.findIndex((category) => category.title === title);
            if (index !== -1) {
                this.categories.splice(index, 1);
            }
        },
        updateCategory: (title, updatedCategory) => {
            const index = this.categories.findIndex((category) => category.title === title);
            if (index !== -1) {
                this.categories[index] = updatedCategory;
            }
        },
    },

    actions: {
        createCategory: (category) => {
            this.addCategory(category);
        },
        deleteCategory: (title) => {
            this.removeCategory(title);
        },
        editCategory: (title, updatedCategory) => {
            this.updateCategory(title, updatedCategory);
        },
    }

})