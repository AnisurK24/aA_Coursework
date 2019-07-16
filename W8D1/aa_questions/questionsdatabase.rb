require "sqlite3"
require "singleton"
require "byebug"

class QuestionsDatabase < SQLite3::Database
    include Singleton

    def initialize
        super('questions.db')
        self.type_translation = true
        self.results_as_hash = true
    end
end

class Question
    attr_accessor :id, :title, :body, :ass_author_id

    def self.find_by_id(id) #look up an id in the table and return a row
        # raise "#{id} not found in database" unless @id
        question = QuestionsDatabase.instance.execute(<<-SQL, id:id)
            SELECT 
                *
            FROM 
                questions
            WHERE 
                questions.id = :id
        SQL
        Question.new(question)
    end

    def self.find_by_author_id(ass_author_id) #look up an id in the table and return a row
        # raise "#{id} not found in database" unless @id
        question = QuestionsDatabase.instance.execute(<<-SQL, ass_author_id: ass_author_id)
            SELECT 
                *
            FROM 
                questions
            WHERE 
                questions.ass_author_id = :ass_author_id
        SQL
        Question.new(question)
    end

    def initialize(options)
        hash = options.first
        @id = hash["id"]
        @title = hash["title"]
        @body = hash["body"]
        @ass_author_id = hash["ass_author_id"]
    end

    def author
        author = QuestionsDatabase.instance.execute(<<-SQL, ass_author_id:ass_author_id)
            SELECT *
            FROM users
            WHERE users.id = :ass_author_id
        SQL
        hash = author.first
        hash["fname"] + " " + hash["lname"]
    end

    def replies
        Reply.find_by_question_id(self.id)
    end
end


class User
    attr_accessor :id, :fname, :lname
    
    def self.find_by_id(id) #look up an id in the table and return a row
        # raise "#{id} not found in database" unless @id
        user = QuestionsDatabase.instance.execute(<<-SQL, id:id)
            SELECT 
                *
            FROM 
                users
            WHERE 
                users.id = :id
        SQL
        User.new(user)
    end
    
    def self.find_by_name(fname, lname)
        # Question::find_by_author_id
        user = QuestionsDatabase.instance.execute(<<-SQL, fname:fname, lname:lname)
            SELECT 
                *
            FROM 
                users
            WHERE 
                fname = :fname AND lname = :lname
        SQL
        User.new(user)
    end

    def initialize(options)
        hash = options.first
        
        @id = hash["id"]
        @fname = hash["fname"]
        @lname = hash["lname"]
    end

    def fname
        self.fname
    end

    def lname
        self.lname
    end

    def authored_questions
        Question.find_by_author_id(self.id)
    end

    def authored_replies
        Reply.find_by_user_id(self.id)
    end
end


class QuestionFollow

    def self.find_by_id(follower_id) #look up an id in the table and return a row
        # raise "#{id} not found in database" unless @id
        question_f = QuestionsDatabase.instance.execute(<<-SQL, follower_id:follower_id)
            SELECT 
                *
            FROM 
                question_follows
            WHERE 
                question_follows.follower_id = :follower_id
        SQL
        QuestionFollow.new(question_f)
    end

    def initialize(options)
        hash = options.first
        
        @follower_id = hash['follower_id']
        @question_id = hash['question_id']
    end
end

class Reply
    attr_accessor :id, :question_id, :replier_id, :reply_id, :body

    def self.find_by_id(id) #look up an id in the table and return a row
        # raise "#{id} not found in database" unless @id
        reply = QuestionsDatabase.instance.execute(<<-SQL, id:id)
            SELECT 
                *
            FROM 
                replies
            WHERE 
                replies.id = :id
        SQL
        Reply.new(reply)
    end
    
    def self.find_by_user_id(replier_id) #look up an id in the table and return a row
        # raise "#{id} not found in database" unless @id
        reply = QuestionsDatabase.instance.execute(<<-SQL, replier_id:replier_id)
            SELECT 
                *
            FROM 
                users
            WHERE 
                users.id = :replier_id
        SQL
        Reply.new(reply)
    end

    def self.find_by_question_id(question_id) #look up an id in the table and return a row
        # raise "#{id} not found in database" unless @id
        reply = QuestionsDatabase.instance.execute(<<-SQL, question_id:question_id)
            SELECT 
                *
            FROM 
                replies
            WHERE 
                replies.question_id = :question_id
        SQL
        Reply.new(reply)
    end

    def initialize(options)
        hash = options.first
        
        @id = hash['id']
        @question_id = hash['question_id']
        @replier_id = hash['replier_id']
        @reply_id = hash['reply_id']
        @body = hash['body']
    end

    def author
        author = QuestionsDatabase.instance.execute(<<-SQL, replier_id:replier_id)
            SELECT *
            FROM users
            WHERE users.id = :replier_id
        SQL
        hash = author.first
        hash["fname"] + " " + hash["lname"]
    end
    
    def question
        author = QuestionsDatabase.instance.execute(<<-SQL, question_id:question_id)
            SELECT *
            FROM questions
            WHERE questions.id = :question_id
        SQL
        hash = author.first
        hash["title"] + "    " + hash["body"]
    end
    
    def parent_reply
        raise "#{self} does not exist" unless self.reply_id
        parent = QuestionsDatabase.instance.execute(<<-SQL, reply_id:reply_id)
            SELECT *
            FROM replies
            WHERE replies.id = :reply_id
        SQL
        hash = parent.first
        hash["title"] + "    " + hash["body"]
    end

    def child_replies
        raise "#{self} does not exist" unless self.reply_id
        child = QuestionsDatabase.instance.execute(<<-SQL, reply_id:reply_id)
            SELECT *
            FROM replies
            WHERE replies.id = :reply_id
        SQL
        hash = child.first
        hash["title"] + "    " + hash["body"]
    end
end

class QuestionLike

    def self.all
        data = QuestionsDatabase.instance.execute("SELECT * FROM question_likes")
        data.map { |datum| QuestionLike.new(datum) }
    end 

    def self.find_by_id(liker_id) #look up an id in the table and return a row
        # raise "#{id} not found in database" unless @id
        question_l = QuestionsDatabase.instance.execute(<<-SQL, liker_id:liker_id)
            SELECT 
                *
            FROM 
                question_likes
            WHERE 
                question_likes.liker_id = :liker_id
        SQL
        QuestionLike.new(question_l)
    end

    def initialize(options)
        hash = options.first
        
        @q_like = hash['q_like']
        @liker_id = hash['liker_id']
        @question_id = hash['question_id']
    end
end


# INSERT INTO replies
#     (question_id, replier_id, body, reply_id)
# VALUES
#     ((SELECT id FROM questions WHERE title = 'Food?'), (SELECT id FROM users WHERE users.fname = 'Bobby'), ('THIS IS A TEST, DO NOT PANIC...'), 7);
