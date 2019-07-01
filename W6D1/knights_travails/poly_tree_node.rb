
class PolyTreeNode

    attr_reader :parent, :children, :value
    
    def initialize(value)
        @parent = nil
        @children = []
        @value = value
    end
    def parent=(node_parent)
        if self.parent
            self.parent.children.delete(self)
        end
        unless node_parent.nil?
            node_parent.children << self
        end
        @parent = node_parent
    end
    def children=(node_child)
        unless @children.include?(self)
            @children << self
        end
    end
    def add_child(node_child)
        node_child.parent = self
    end
    def remove_child(node_child)
        if @children.include?(node_child)
            node_child.parent = nil
        else
            raise "Node is not a child."
        end
    end
end