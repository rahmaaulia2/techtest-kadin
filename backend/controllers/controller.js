const { Contact } = require("../models");

class Controller {
  static async AddContact(req, res) {
    try {
      const { name, email, phone } = req.body;
      const contact = await Contact.create({ name, email, phone });
      res.status(201).json(`Contact ${contact.name} has been added`);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  static async GetContact(req, res) {
    try {
      const contacts = await Contact.findAll();
      // console.log(contacts);
      res.status(200).json(contacts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  static async EditContact(req, res) {
    try {
      const { id } = req.params;
      console.log(id);
      
      const { name, email, phone } = req.body;
      const contact = await Contact.findByPk(id);
      if (!contact) {
        throw { name: "ContactNotFound" };
      }
      await Contact.update({ name, email, phone }, { where: { id } });
      res.status(200).json(`Contact ${contact.name} has been updated`);
    } catch (error) {
      if (error.name === "ContactNotFound") {
        res.status(404).json({ message: "Contact not found" });
      }
      res.status(500).json({ message: error.message });
    }
  }
  static async DeleteContact(req, res) {
    try {
      const { id } = req.params;
      const contact = await Contact.findByPk(id);
      if (!contact) {
        throw { name: "ContactNotFound" };
      }
      await Contact.destroy({ where: { id } });
      res.status(200).json(`Contact ${contact.name} has been deleted`);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = Controller;
