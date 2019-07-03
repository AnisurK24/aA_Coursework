#class inheritence
class Employee
  attr_reader :salary
  def initialize(name, title, salary, boss = nil)
    @name, @title, @salary, @boss = name, title, salary, boss
  end

  def bonus(multiplier)
    bonus = salary * multiplier
  end
end



class Manager < Employee
    attr_reader :employee_arr
    def initialize(name, title, salary, boss = nil)
        super(name, title, salary, boss)
        @employee_arr = []
    end

    def add_employees(employee)
        employee_arr << employee
    end
      
    def bonus(multiplier)
        all_employee = employee_arr.flatten
        count = 0
        all_employee.each do |employee|
            count += employee.salary
        end
        count * multiplier
    end

    def inspect
      @name = name
    end
end

ned = Manager.new("Ned", "CEO", 1000000)
darren = Manager.new("Darren", "TA Manager", 78000, ned)
david = Employee.new("David", "TA", 10000, darren)
shawna = Employee.new("Shawna", "TA", 12000, darren)


#ned [darren[david, shawna]]
darren.add_employees(david)
darren.add_employees(shawna)
