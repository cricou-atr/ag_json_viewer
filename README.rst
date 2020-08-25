===========================
JSON Viewer for Odoo
===========================

This widget is an Odoo integration of `jQuery json-viewer <https://github.com/abodelot/jquery.json-viewer>`_


Without widget
==============
.. image:: https://firebasestorage.googleapis.com/v0/b/git-demo-5c6e0.appspot.com/o/ag_json_viewer%2Fstd_text_view.PNG?alt=media&token=b3a9910b-6e51-40e6-9bdb-bbe1e8f1c696
 :width: 800

With widget
===========
.. image:: https://firebasestorage.googleapis.com/v0/b/git-demo-5c6e0.appspot.com/o/ag_json_viewer%2Fjson_viewer.PNG?alt=media&token=8cb04c17-a82b-4436-8877-bf1bddb4992e
 :width: 800

Usage
=====

To use this module, you need to decorate xml text field with widget ``ag_json_viewer`` on form view

.. code-block:: xml

    <field>
        <form string="Form name">
            <sheet>
                <group>
                    <field name="my_text_field" widget="ag_json_viewer"/>
                </group>
            </sheet>
        </form>
    </field>

Options
=======

The ``JSON Viewer`` accepts an optional ``options`` argument. The supported options are:

- ``collapsed`` (boolean, default: ``false``): all nodes are collapsed at HTML generation.
- ``rootCollapsable`` (boolean, default: `true`): allow root element to be collapsed.
- ``withQuotes`` (boolean, default: ``false``): all JSON keys are surrounded with double quotation marks (``{"foobar": 1}`` instead of ``{foobar: 1}``).
- ``withLinks`` (boolean, default: ``true``): all values that are valid links will be clickable, if ``false`` they will only be strings.

.. code-block:: xml

 <field name="my_text_field" widget="ag_json_viewer" options="{'collapsed': true,
                                                               'rootCollapsable': false,
                                                               'withQuotes': true,
                                                               'withLinks': false}"/>

About
=====
Author
~~~~~~

* Cyril RICOU @ Ambition Telecom & Réseaux
* Mathias MANGON @ Ambition Telecom & Réseaux