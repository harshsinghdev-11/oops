class QueryBuilder {
  constructor() {
    this._fields = [];
    this._table = '';
    this._where = null;
    this._order = null;
    this._limit = null;
  }
  select(...fields) { 
    this._fields = fields;
    console.log(this); 
    return this; 
    }
  from(table) { this._table = table; return this; }
  where(condition) { this._where = condition; return this; }
  orderBy(field, dir = 'ASC') { this._order = `${field} ${dir}`; return this; }
  limit(n) { 
    this._limit = n; 
    console.log(this);
    return this; }
  build() {
    let q = `SELECT ${this._fields.join(', ')} FROM ${this._table}`;
    if (this._where) q += ` WHERE ${this._where}`;
    if (this._order) q += ` ORDER BY ${this._order}`;
    if (this._limit) q += ` LIMIT ${this._limit}`;
    return q;
  }
}

const query = new QueryBuilder()
  .select('name', 'email').from('users')
  .where('age > 18').orderBy('name').limit(10).build();
console.log(query);